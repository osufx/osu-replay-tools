var file_uploader, loaded_replay;

function loadDependencies(){
    let require = ["lzma.min.js", "replay-parser.js"];
    
    script_status = -require.length;

    let scripts = Array
    .from(document.querySelectorAll('script'))
    .map(scr => scr.src.split("/js/")[1]);

    require.forEach(function(r){
        if (!scripts.includes(r)){
            var s = document.createElement("script");
            s.src = "js/" + r;
            document.head.append(s);
        }
    });
}

loadDependencies();

window.onload = function(){
    loaded_replay = new Replay();

    file_uploader = document.createElement("input");
    file_uploader.type = "file";
    file_uploader.name = "files[]";
    file_uploader.addEventListener("change", uploadListener, false);

    document.body.appendChild(file_uploader);
}

var uploadListener = function(e) {
	var file = e.target.files[0];
	var reader = new FileReader();
	reader.onload = (function(f) {
		return function(progress) {
            var data = atob(progress.target.result.split("base64,",)[1]).split("").map(function(value, i, array){
                return value.charCodeAt(0);
            });
            loaded_replay.Parse(data, function(data){
                loaded_replay.ReplayData = loaded_replay.ParseReplayData(data);
                return loaded_replay;
            });
		};
	})(file);
	reader.readAsDataURL(file);
};
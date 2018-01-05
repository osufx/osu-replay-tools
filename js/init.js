var file_uploader;

function loadDependencies(){
    let require = ["lzma.min.js", "replay-parser.js"];

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

window.onload = function(){
    loadDependencies();

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
            //Get data and run some sort of replay parser
		};
	})(file);
	reader.readAsDataURL(file);
};
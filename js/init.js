var file_uploader;

window.onload = function(){
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
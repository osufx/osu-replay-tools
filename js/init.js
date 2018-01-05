var file_uploader;

window.onload = function(){
    file_uploader = document.createElement("input");
    file_uploader.type = "file";
    file_uploader.name = "files[]";

    document.body.appendChild(file_uploader);
}
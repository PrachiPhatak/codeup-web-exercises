//on post get
addEvents();

function addEvents() {
    document.getElementById("preview")
        .addEventListener("click", previewListener);
    //removeElementClickEvent();
}
function removeElementClickEvent() {
    let element = document.getElementById("preview");
    element.removeEventListener("click", previewListener);
}

function previewListener() {
    document.body
        .appendChild(previewContent());
}

function previewContent() {
    let previewDiv = document.createElement("div");
    previewDiv.id = "blogPreview";
    previewDiv.setAttribute("height", "100px")
    hideForm();
    previewDiv.appendChild(addBackButton());
    previewDiv.appendChild(addHeaderPreview());
    previewDiv.appendChild(addContentPreview());
    previewDiv.appendChild(addImgPreview());

    return previewDiv;
}

function hideForm() {
    let originalDiv = document.getElementById("form");
    originalDiv.hidden = true;
}

function addBackButton() {
    let backButton = document.createElement("button");
    backButton.textContent = "Exit Preview";
    backButton.addEventListener("click", function (){
        let form = document.getElementById("form");
        let blog = document.getElementById("blogPreview");
        form.hidden = false;
        blog.hidden = true;
        document.body.replaceChild(form, blog);
    })
    return backButton;
}

function addHeaderPreview() {
    let headerPreview = document.createElement("h2");
    headerPreview.innerText = "BLOG TITLE";
    //headerPreview.innerText = document.getElementById("header").value;
    headerPreview.setAttribute("class", "text-center")
    return headerPreview;
}

function addContentPreview() {
    let contentPreview = document.createElement("p");
    contentPreview.innerText = "BLOG TEXT"
    //contentPreview.innerText = document.getElementById("content").value;
    return contentPreview;
}

function addImgPreview() {
    let imgPreview = document.createElement("img");
    imgPreview.setAttribute("url", document.getElementById("imgFile").value);
    imgPreview.setAttribute("type", "file");
    return imgPreview;

}
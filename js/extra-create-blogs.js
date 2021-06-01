//on post get
let header = "Easy Ways To Become A Minimalist"
let content = "You’ve heard it time and time again: minimalism, tiny houses, downsizing, minimalist living.\n" +
    "\n" +
    "And the thought of it sounds good — living with less things so you can live with more heart, passion, and joy.\n" +
    "\n" +
    "But what about your perfectly curated wardrobe? All the dog toys you just bought? And that toaster " +
    "from Aunt Gertrude that’s not quite what you wanted, but it’s the thought that counts?"
let tags = "#Minimal #living #blog #Marie-Kondo"
let userFilePath = "";
let imgPath = document.getElementById("imgFile");
imgPath.addEventListener('change', (event) => {
    console.log(event)
    console.log(imgPath)
    let file = document.getElementById('imgFile').files[0]
    let fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = function (e) {
        let img = document.getElementById('img1')
        img.src = this.result
        userFilePath = this.result;
    }
});

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
    previewDiv.setAttribute("class", "container bg-dark text-light my-3")
    previewDiv.setAttribute("height", "100px")
    hideForm();
    previewDiv.appendChild(addBackButton());
    previewDiv.appendChild(addHeaderPreview());
    previewDiv.appendChild(addImgPreview());
    previewDiv.appendChild(addContentPreview());
    previewDiv.appendChild(addTagPreview());
    previewDiv.appendChild(addDate());
    return previewDiv;
}

function hideForm() {
    let originalDiv = document.getElementById("form");
    originalDiv.hidden = true;
}

function addBackButton() {
    let backButton = document.createElement("button");
    backButton.textContent = "Exit Preview";
    backButton.setAttribute("class", "btn-lg btn-info mt-3 mb-5")
    backButton.addEventListener("click", function () {
        let form = document.getElementById("form");
        let blog = document.getElementById("blogPreview");
        form.hidden = false;
        blog.hidden = true;
        document.body.replaceChild(form, blog);
    })
    return backButton;
}

function addHeaderPreview() {
    let headerPreview = document.createElement("h3");
    headerPreview.setAttribute("class", "text-center")

    console.log("header " + document.getElementById("header").value)
    if (document.getElementById("header").value === "") {
        //headerPreview.innerText = "Your Blog header goes here."
        headerPreview.innerText = header;
    } else {
        headerPreview.innerText = document.getElementById("header").value;
    }
    return headerPreview;
}

function addImgPreview() {
    let imgPreview = document.createElement("img");
    imgPreview.setAttribute("width", "100px")
    imgPreview.setAttribute("class", "float-left m-3 pt-3")
    imgPreview.setAttribute("src", userFilePath);
    return imgPreview;

}

function addContentPreview() {
    let contentPreview = document.createElement("p");
    contentPreview.setAttribute("class", "pt-4");
    if (document.getElementById("content").value === "") {
        // contentPreview.innerText = "Your content goes here. Your content goes here. Your content goes here." +
        //     "Your content goes here. Your content goes here. Your content goes here."
        contentPreview.innerText = content;

    } else {
        contentPreview.innerText = document.getElementById("content").value;
    }
    return contentPreview;
}

function addTagPreview() {
    let tagPreview = document.createElement("p");
    tagPreview.setAttribute("class", "text-left text-info py-5");
    if (document.getElementById("tags").value === "") {
        //tagPreview.innerText = "Tags go here #tag"
        tagPreview.innerText = tags;
    } else {
        tagPreview.innerText = document.getElementById("tags").value;
    }
    return tagPreview;
}

function addDate() {
    let date = document.createElement("p");
    date.setAttribute("class", "text-muted pb-5");
    date.innerText = "Published on " + new Date(Date.now()).toDateString();
    return date;
}





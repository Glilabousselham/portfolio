// projects

var projects = [];
fetch("/json/projects.json")
    .then((res) => res.json())
    .then((p) => {
        showPojects(p);
        projects = p;
    });

function showPojects(projects) {
    const projectsContainer = document.getElementById("projects");
    projectsContainer.innerHTML = "";
    projects.forEach((project) => {
        projectsContainer.innerHTML += getProjectElement(project);
    });
}

function getImageName(image) {
    return image.split("/").reverse()[0];
}
function changeImage(id, counter) {
    const img = document.getElementById("p-img-" + id);
    const project = projects.find((p) => p.id == id);
    const currentImgIndex = project.images.findIndex(
        (i) => getImageName(i) == getImageName(img.src),
    );
    if (
        (currentImgIndex == 0 && counter == -1) ||
        (currentImgIndex == project.images.length - 1 && counter == 1)
    ) {
        return;
    }
    const nextImgIndex = currentImgIndex + counter;
    img.src = project.images[nextImgIndex];
    document.getElementById("currentImage-" + id).innerHTML = nextImgIndex + 1;
}

function getProjectElement(project) {
    return `
          <div class="project">
            <div class="left">
                <img 
                    id="p-img-${project.id}"
                    width="200px"
                    height="150px"
                    src="${project.images[0]}"
                    alt="" />
                <div class="control">
                    <span class="btn" onclick="changeImage(${project.id},-1)"><</span>
                    <span class="count"><span id="currentImage-${project.id}">1</span>/${project.images.length}</span>
                    <span class="btn" onclick="changeImage(${project.id},1)">></span>
                </div>
            </div>
            <div class="right">
                <div class="p-title">${project.title}</div>
                <div class="p-description">${project.description}</div>
                <div class="btns">
                    <a class="btn" href="${project.link}" target="_blank" >demo</a>
                    <a class="btn">souce code</a>
                </div>
            </div>
        </div>
  `;
}

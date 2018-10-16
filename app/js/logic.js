///////////////////////////////////////////////////////////////////////////Paneles

var pagesPanel = document.getElementById("pagesPanel");

///////////////////////////////////////////////////////////////////////////
var project = {};

function updateGui(){
	pagesPanel.innerHTML = "";
	for (var i = 0; i < project.pages.length; i++) {
		var pageDiv = document.createElement("div");
		pageDiv.className = "pageThumbnail";
		console.log(project.pages[i].name)
		pageDiv.innerText = project.pages[i].name;
		pagesPanel.appendChild(pageDiv);
	}

	var AddPageButton = document.createElement("div");
}


function createNewProject(){
	project = {
		pages: [
						{
							name: "index",
						content: {}
					}
				]
		,

		images: {
		}
	}
	updateGui()
	return project;

}

createNewProject()
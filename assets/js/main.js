const langButton = document.getElementById("developerTalkTurkish");
if(langButton){
    langButton.addEventListener("click", () => {
        if(langButton.textContent === "English") {
            langButton.textContent = "Türkçe";
            if(langButton.getAttribute("class").includes("bg-dark-blue text-white")){
                let newClass = langButton.className.replace("bg-dark-blue text-white","bg-clean-green text-muted border")
                langButton.className = newClass;
            }
        }
        else {
            langButton.textContent = "English";
            if(langButton.getAttribute("class").includes("bg-clean-green text-muted")){
                let newClass = langButton.className.replace("bg-clean-green text-muted","bg-dark-blue text-white")
                langButton.className = newClass;
            }
        }
    })
}
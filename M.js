let dataProject = []
let i = 0


function getData(event) {

    
    event.preventDefault()

    let nameProject = document.getElementById('nameProject').value
    let startDate = document.getElementById('startDate').value
    let endDate = document.getElementById('endDate').value
    let description = document.getElementById('description').value

    let nodeJs = document.getElementById('nodeJs').checked
    let nextJs = document.getElementById('nextJs').checked
    let reactJs = document.getElementById('reactJs').checked
    let typeScript = document.getElementById('typeScript').checked

    let fileImg = document.getElementById('fileImg').files[0]

    fileImg = URL.createObjectURL(fileImg);

    if (nameProject == "") {
        return alert('Tolong Lengkapi Form yg tersedia!!! ')
    }
    else if (startDate == "") {
        return alert('Tolong Lengkapi Form yg tersedia!! ')
    } else if (endDate == "") {
        return alert('Tolong Lengkapi Form yg tersedia!! ')
    } else if (description == "") {
        return alert('Tolong Lengkapi Form yg tersedia!! ')
    } else if (fileImg == "") {
        return alert('Tolong Lengkapi Form yg tersedia!! ')
    } else if (!nodeJs && !nextJs && !reactJs && !typeScript) {
        return alert('Mohon pilih tehnologi yang anda butuhkan ')
    }
    let data = { nameProject, startDate, endDate, description, nodeJs, nextJs, reactJs, typeScript, fileImg }

    dataProject.push(data)
    console.log(dataProject)

    showData()

 
}


function showData() {
    let containerResult = document.getElementById('containerResult')

  

    containerResult.innerHTML += `
        <div class="card-project">
            <img src="${dataProject[i].fileImg}" >
            <p class="title-project">${dataProject[i].nameProject}</p>
            <p class="durasi-project"> durasi : 3 bulan</p>
            <p class="deskripsi-project">${dataProject[i].description}</p>


            <div class="icon-technology">
                <img id="iconNodeJs${i}" src="Assetku/node js.jfif">
                <img id="iconReactJs${i}" src="Assetku/react js.jfif">
                <img id="iconNextJs${i}" src="Assetku/nextjs.png">
                <img id="iconTypeScript${i}" src="Assetku/typescript.png">
            </div>

            
        </div>`

        if (dataProject[i].nodeJs == false) {
            document.getElementById(`iconNodeJs${i}`).style.display = "none"
        } 
        if (dataProject[i].nextJs == false) {
            document.getElementById(`iconNextJs${i}`).style.display = "none"
        } 
        if (dataProject[i].reactJs == false) {
            document.getElementById(`iconReactJs${i}`).style.display = "none"
        } 
        if (dataProject[i].typeScript == false) {
            document.getElementById(`iconTypeScript${i}`).style.display = "none"
        }

    

    i++
    

} 

<i let i=0; i<15; i++>{
    console.log("a")
}
const btnDownload = document.querySelectorAll(".downloadBtn")
const search = document.querySelector("#search")

    for (let btn of btnDownload ) {
    btn.addEventListener('click', (e) => {
           
        if (btn.href == `http://localhost:5000/livros?search=${search.value}`) {
            alert("Essa mídia não está disponível para download")
            e.preventDefault()
        }
    });
}


const datas = document.querySelectorAll(".data")

for (let data of datas) {
   let newData = data.innerText.split("-")
   newData = `${newData[0]}`
   data.innerText = newData

   if(data.innerText === "") {
    data.innerText = "Desconhecido"
   }
}



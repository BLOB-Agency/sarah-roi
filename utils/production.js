const displayProdData = (data ) => {
    return `
    <div class="prod-box-img">
    <img src="../medias/learning/${data.img}" alt="">
  </div>
  <aside>
    <div>
      <h3>${data.title}</h3>
      <span>${data.subtitle}</span>
    </div>
    <div>
      <p>
        <em>${data.emphasis}</em><br>
        ${data.description}
      </p>
    </div>
  </aside>
    `
}

const getProdData = () => {
    const boxLearning = document.querySelectorAll('.box-production');
    boxLearning.forEach(box => {
        box.addEventListener('click', (e) => {
            e.preventDefault();
            const title = box.querySelector('h3').textContent;
            learningDatas.forEach(data => {
                if(data.title === title){
                    console.log(data)
                    prodBox.innerHTML += displayProdData(data)
                    containerProd.classList.remove("hidden")
                    containerLearning.classList.add("hidden")
                }
            })
        })
    })
}
const arrowFunc = () => {
    containerProd.classList.add("hidden");
    prodBox.innerHTML = " ";
    containerLearning.classList.remove("hidden");
}

arrow.addEventListener("click", (e) => {
    e.preventDefault();
    arrowFunc();
})

// const getProdData = () => {
    
//     const linksProd = document.querySelectorAll(".linkProd");
//     linksProd.forEach(linkProd => {
//         linkProd.addEventListener("click", (e) =>{
//         //   e.preventDefault()
//             const title = linkProd.querySelector('h3').textContent;
//             learningDatas.forEach(data => {
//                 if(data.title === title){
//                     console.log(data);
//                     window.localStorage.setItem("data", JSON.stringify(data));
//                 }
//             })
            
//         })
//     })
// }



const displayLearningData = (data) => {
    return `
    <article class="box-production">
      <div class="box-production-img">
        <img
          src="../medias/learning/${data.img}"
          alt=""
        />
      </div>
      <div class="box-production-legend">
        <h3>${data.title}</h3>
        <p>${data.subtitle}</p>
      </div>
  </article>
    `
}

learningDatas.forEach(learningData => {
    containerLearningCards.innerHTML += displayLearningData(learningData)
   getProdData()
})
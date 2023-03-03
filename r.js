const Ai = () =>{
    const url=` https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => displayAi(data.data.tools));
  }


const displayAi = universes =>{
    const universesContainer = document.getElementById('ai-universe');
    universesContainer.textContent = " ";

    universes.forEach(api => {
      console.log(api);
        const universeDiv = document.createElement('div');
        universeDiv.classList.add('col');
    // Append
        universeDiv.innerHTML = `
        <div class="card p-3 h-100">
        <img src="${api.image}" class="card-img-top w-50 image-fluid ml-2 align-items-baseline">
        <div class="card-body">
        <h5 class="card-title fw-bold">Features:</h5>
        <h5 class="card-title fs-6 text-secondary">1. ${api.features[0]}</h5>
        <h5 class="card-title fs-6 text-secondary">2. ${api.features[1]}</h5>
        <h5 class="card-title fs-6 text-secondary">3. ${api.features[2]}</h5>
        </div>
        <hr>
        <div class=" d-flex justify-content-between">
          <div>
          <h5 class="card-title p-3 fw-bold">${api.name}</h5>
          <p class="card-title p-3 text-secondary"><i class="fa-solid fa-calendar-days"></i> ${api.published_in}</p>
          </div>
          <button type="button" class="btn btn-danger rounded-circle bg-danger-subtle text-danger border-0 h-50 align-items-center"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
        `;
        universesContainer.appendChild(universeDiv);
    });
        
}

Ai()
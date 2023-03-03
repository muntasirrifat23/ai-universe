const Ai = () =>{
    const url=` https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => displayAi(data.data.tools));
  }


const displayAi = universes =>{
    const universesContainer = document.getElementById('ai-universe');
    universesContainer.textContent = " ";
    universes= universes.slice(0,6);

     universes.forEach(api => {
      console.log(api);
        const universeDiv = document.createElement('div');
        universeDiv.classList.add('col');
    // Append
        universeDiv.innerHTML = `
        <div class="card p-3 h-100">
        <img src="${api.image}" class="card-img-top w-100 image-fluid ml-2 align-items-baseline">
        <div class="card-body">
        <h5 class="card-title fw-bold">Features:</h5>
        <h5 class="card-title fs-6 text-secondary">1. ${api.features[0]?api.features[0]:'No value'}</h5>
        <h5 class="card-title fs-6 text-secondary">2. ${api.features[1]?api.features[1]:'No value'}</h5>
        <h5 class="card-title fs-6 text-secondary">3. ${api.features[2]?api.features[2]:'No value'}</h5>
        </div>
        <hr>
        <div class=" d-flex justify-content-between">
          <div>
          <h5 class="card-title p-3 fw-bold">${api.name}</h5>
          <p class="card-title p-3 text-secondary"><i class="fa-solid fa-calendar-days"></i> ${api.published_in}</p>
          </div>
          <button type="button" onclick="details('${api.id}')" class="btn btn-danger rounded-circle bg-danger-subtle text-danger border-0 h-50 align-items-center" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
        `;
        universesContainer.appendChild(universeDiv);
    });
}
// Modal

const details = id=>{
  const url=`https://openapi.programming-hero.com/api/ai/tool/${id}`;
 
  console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => Display(data.data));
  

}
const Display =id =>{
  console.log(id);
  const detailsContainer = document.getElementById('details-modal');
  detailsContainer.innerHTML =`
  <div class="row row-cols-1 row-cols-md-2 g-4 d-flex">
     <div class="card">
       <h5 class="mb-4">${id.description}</h5>
      </div>
    </div>
  </div>

  <div class="card align-items-center p-4">
    <img src="${id.image_link[0]}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text fw-bold">"${id.input_output_examples[0].input}"</p>
      <p class="fs-6 text-secondary">"${id.input_output_examples[0].output}"</p>
    </div>
  </div>
  <div>

  </div>
  `;
}




Ai()
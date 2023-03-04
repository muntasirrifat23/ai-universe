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

        universeDiv.innerHTML = `
        <div class="card p-3 h-100">
        <img src="${api.image}" class="card-img-top w-100 image-fluid ml-2 align-items-baseline">
        <div class="card-body">
        <h5 class="card-title fw-bold ">Features:</h5>
        <h5 class="card-title fs-6 text-secondary mt-3">1. ${api.features[0]?api.features[0]:'No value'}</h5>
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
  <div class="d-flex">
  <div class="card p-4 border border-danger bg-danger-subtle g-4 m-2">
    <h5 class="fw-bold">${id.description ? id.description : 'Data Not Find'}"</h5>
    <div class="card-group border-0">
      <div class="card m-2 rounded-3">
      <div class="card-body">
        <h5 class="card-title text-success">${id.pricing[0].price} ${id.pricing[0].plan}</h5>
      </div>
      </div>
      <div class="card m-2 rounded-3">
        <div class="card-body">
        <h5 class="card-title text-warning">${id.pricing[1].price} ${id.pricing[1].plan}</h5>
        </div>
      </div>
      <div class="card m-2 rounded-3">
        <div class="card-body">
        <h5 class="card-title text-info">${id.pricing[2].price} ${id.pricing[2].plan}</h5>
        </div>
      </div>
    </div>
    <div>
    <div class="d-flex justify-content-around mx-auto position-sticky">
      <div>
        <h5 class="card-title fw-bold">Features:</h5>
        <p class="card-title fs-6"><ul class="text-secondary">
        <li> ${id.features[1].feature_name?id.features[1].feature_name:'No value'}</li>
        <li> ${id.features[2].feature_name?id.features[2].feature_name:'No value'}</li>
        <li> ${id.features[3].feature_name?id.features[3].feature_name:'No value'}</li>
        </ul>
        </p>
      </div>
          
      <div>
          <h5 class="card-title fw-bold">Integrations:</h5>
          <p class="card-title fs-6"><ul class="text-secondary">
          <li> ${id.integrations[0]?id.integrations[0]:'No value'}</li>
          <li> ${id.integrations[1]?id.integrations[1]:'No value'}</li>          
          <li> ${id.integrations[2]?id.integrations[2]:'No value'}</li>
          <li> ${id.integrations[3]?id.integrations[3]:'No value'}</li>
          <li> ${id.integrations[4]?id.integrations[4]:'No value'}</li>
          </ul>
          </p>
      </div>
      </div>  
    </div>
  </div>
    
  <div class="card align-items-center p-4 m-2">
    <img src="${id.image_link[0]}" class="card-img-top" alt="...">
    <button type="button" class="btn btn-danger position-absolute top-0 end-0">${id.accuracy.score ? id.accuracy.score :'0'}% accuracy</button>
      <p class="card-text fs-3 fw-bold">${id.input_output_examples[0].input}</p>
      <p class="fs-6 text-secondary">${id.input_output_examples[0].output}</p>
  <div>

  </div>
  `;
}

Ai()
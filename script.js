/*let prenom= 'Daniel';
let tab = [30, 43]; // tab.length

//modèle de libellé 

let complexe = `<p class="toto">${prenom} vient de choisir deux nombre : ${tab.join(' - ')} </p>`
document.write(complexe);

// dataset
alert(document.querySelector('.active').dataset.mode)

// fonctions flechées

/*function calcul(nb1,nb2){
  return nb1+nb2;
}*/
/*calcul = (nb1,nb2) => nb1+nb2;
alert(calcul(33,7));

// forEach()
let tabButton = document.querySelectorAll('button');
alert(tabButton.length);
//tabButton.forEach( element => alert(element.dataset.mode))

// map()
let taby=['aa','bb','cc'];
let pluriel = taby.map( element => element+'s' );
alert(pluriel);*/

// objet application
let app = {
    modeFiltre : 'grille',
    appVue : document.getElementById('appVue'),
    listBtFiltre : document.querySelectorAll('button')
  };
  
  // mon controleur
  app.controleur = {
    nosProduits : function(){
      // choix de la vue
      let choixVue = (app.modeFiltre == 'grille')? app.vue.vueDetailGrille : app.vue.vueDetailListe; // opérateur ternaire
      // on appele le bon modèle en lui fournissant la vue
      app.modele.getProduits(choixVue);
    }
  }
  
  //ma vue
  app.vue = {
    vueDetailGrille : function(data){
      // création d'un tableau (map) contenant les colonnes HTML à partir du tableau d'objet dom 
      let tabDiv = data.map(element => `<div class="col-sm"><h2>${element.titre}</h2><p><img class="img-fluid" src="${element.img}"></p><p>${element.description}</p><p>Prix : <i>${element.prix}</i> € <i class="fas fa-shopping-cart"></i></p> </div>`);
      // on créé la vue grille
      app.appVue.innerHTML = `<div class="row"> ${tabDiv.join('')} </div>`;
    },
    vueDetailListe : function(data){
      // création d'un tableau (map) contenant les listes HTML à partir du tableau d'objet dom
      let tabDiv = data.map(element => `<li><b>${element.titre}</b> : ${element.description} <br> Prix : <i>${element.prix}</i> € <i class="fas fa-shopping-cart"></i> </li>`);
      // on créé la vue liste
      app.appVue.innerHTML = `<ul> ${tabDiv.join('')} </ul>`;
    }
  }
  
  // mon modele
  app.modele = {
    getProduits : function(callBackVue){
      // data
      let tabTousLesProduits = [
        {titre:'p1', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia sequi soluta, consectetur eum laudantium esse quis dicta doloremque dolorem quas, cupiditate nostrum! Nisi, assumenda odio? Consequuntur praesentium tenetur nemo at. 1', prix: 34 , img : 'https://cdn.pixabay.com/photo/2018/01/18/20/56/auto-3091234_960_720.jpg'},
        {titre:'p2', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia sequi soluta, consectetur eum laudantium esse quis dicta doloremque dolorem quas, cupiditate nostrum! Nisi, assumenda odio? Consequuntur praesentium tenetur nemo at. 2', prix: 14 , img : 'https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_960_720.jpg'},
        {titre:'p3', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia sequi soluta, consectetur eum laudantium esse quis dicta doloremque dolorem quas, cupiditate nostrum! Nisi, assumenda odio? Consequuntur praesentium tenetur nemo at. 3', prix: 55 , img : 'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_960_720.jpg'}
      ]
      // appel de la vue
      callBackVue(tabTousLesProduits);
    },
    getCommandes : function(){
      
    }
  }
  
  // script avec les comportements
  app.controleur.nosProduits(); 
  
  // les evenements
  app.listBtFiltre.forEach(element => element.addEventListener('click', function(){
      // reset css
      app.listBtFiltre.forEach(element => element.classList.remove('active'))
      // definition de la class active
      this.classList.add('active');
      // modifie le mode d'affichage
      app.modeFiltre = this.dataset.mode;
      // on relance le controleur
      app.controleur.nosProduits();
  }));
  
  
  
  
  
  // MVC
  // modele => recupere les données
  // vue => affichage des données (html)
  // controleur => intermédiaire entre la vue et le modèle
  
  
  
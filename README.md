# Data visualization
Une application pour la visualisation des données

## Application
Cette application Javascript, permet de visualiser les données sous forme d'un diagramme à barres

## Technologies
Créée avec Javascript et l'API CANVAS

## DEMO
![img](https://user-images.githubusercontent.com/36522492/56282778-d94edb80-6107-11e9-96be-66c08d7be964.PNG)

## Code

* récupérer les valeurs saisies

````
 getData: function(){
                for(let i=1; i<6; i++){
                    let val = document.getElementById(''+i).value;
                    this.data[i-1] = val;
                }
                this.data.forEach(e => {
                    this.total+=Number(e);
                });
            },
````

* Calculer le pourcentage: on les met dans un array 'percentage'

````
 getPercentage: function(){
                for(let i=0;i<5;i++){
                    this.percentage[i] = ((this.data[i])/(this.total))*100;
                }
            }
````

* Dessiner les barres: en parcourant les pourcentages des valeurs saisies
la hauteur d'une barre est le pourcentage multiplié par 3, pour agrandir les représentations

````
table.percentage.forEach(e=>{
                    ctx.beginPath();
                    ctx.fillStyle = this.clr[i];
                    if(e<5)  ctx.fillRect(x, y, width, 5);
                    ctx.fillRect(x, y, width, e*(-3)); //inverser et tripler la hauteur
                    ctx.font = "26px Arial";
                    ctx.fillText(e.toFixed(2)+"%",x+10,50);
                    x+=120;
                    i+=1;
                });
````

canvas = document.querySelector('canvas');
        ctx = this.canvas.getContext('2d');
        var representation = {
            
            clr:  ['#38A89D','#64D5CA','#22292F','#1F9D55','#794ACF','#F2D024', '#EB5286', '#E3342F'],

            drawVisualisation: function(){
                let x = 40, y = 400, width = 100;
                let i = 2;
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
            },
            clearCanvas: function(){
                ctx.clearRect(0,0,canvas.width, canvas.height);
                this.x = 0;
            },
            drawAxes: function(){

                // arrows
                ctx.moveTo(5, 35);
                ctx.lineTo(10, 30);
                ctx.lineTo(15, 35);
                //y and x
                ctx.moveTo(10, 30);
                ctx.lineTo(10, 450);
                ctx.lineTo(640, 450);
                //arrows
                ctx.moveTo(635, 445);
                ctx.lineTo(640, 450);
                ctx.lineTo(635, 455);

                ctx.strokeStyle = "#000";
                ctx.stroke();
            }
        }

        var table = {
            data : [5],
            percentage: [5],
            total: 0,
            getData: function(){
                for(let i=1; i<6; i++){
                    let val = document.getElementById(''+i).value;
                    this.data[i-1] = val;
                }
                this.data.forEach(e => {
                    this.total+=Number(e);
                });
            },
            getPercentage: function(){
                for(let i=0;i<5;i++){
                    this.percentage[i] = ((this.data[i])/(this.total))*100;
                }
            },
            clearData: function(){
                this.total = 0;
                this.data.fill(0);
                this.percentage.fill(0);
            },
        }
        function visualize(){
            table.clearData();
            representation.clearCanvas();
            representation.drawAxes();
            table.getData();
            table.getPercentage();
            representation.drawVisualisation();
        }
        representation.drawAxes();


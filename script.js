function myFunction() {
     document.getElementById("sr").value='';

}

$(document).ready(function(){  
           $('#sr').keyup(function(){  
                s($(this).val());  
           });  
           function s(value){  
                $('#td tr').each(function(){  
                     var x = 'false';  
                     $(this).each(function(){  
                       if(   $(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0  )
                          {  
                               x= 'true';  
                               $(this).css('bgcolor', 'yellow'); 
                           $(this).css('color', 'white');
                          }  
                          else{
                              $(this).css('background', 'yellow'); 
                           $(this).css('color', 'blue');
                         }
                     });                                     
                });

           }  

          });  

  
fetch("data.json").then(function(response)
{
     return response.json();
}).then(function(products){
     let placeholder = document.querySelector("#data-output");
     let out = "";
     for(let product of products)
     {
          out +=`
          <tr>
          <td>${product.movieId}</td>
          <td>${product.firstName}</td>
          <td>${product.lastName}</td>
          <td>${product.Journals}</td>
          <td>${product.director}</td>
          </tr>
          `;
          
     }
     placeholder.innerHTML = out;
})
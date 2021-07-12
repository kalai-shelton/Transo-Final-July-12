// window.addEventListener("DOMContentLoaded", function() {    
//   var form = document.getElementById("contact-form");
//   var button = document.getElementById("contact-form-button");
//   var status = document.getElementById("contact-form-status");

//   let parameters = new URLSearchParams(window.location.search);
//   //const urlParams = new URL(
//       //  "https://transo.in/?utm_source=google&utm_medium=cpc&utm_campaign=FreightShipmentCargo-BMM_TrackMonitor&gclid=EAIaIQobChMI8dPwxpzt6gIVxNeWCh3vwA6NEAAYASAAEgIOqPD_BwE  "
//       //);
  
//   function success() {
//     form.reset();
//     button.style = "display: none ";
//     status.innerHTML = "Thanks! Contact form is submitted successfully.";
 
//     var utm=parameters.get("utm_source");
//       var med=parameters.get("utm_medium");
     
//       if (parameters.has("gclid")) {
//         var clickid= parameters.get("gclid");
//       }
//        else  if (parameters.has("li_fat_id")) {
//         var clickid= parameters.get("li_fat_id");
//       }
//       else  if (parameters.has("fbclid")) {
//         var clickid= parameters.get("fbclid");
//       }
//       else{
//         clickid = "null"
//       }

//     document.getElementById('utmSrc').value=utm;
//    document.getElementById('utmCamp').value=med;
//    document.getElementById('clickId').value=clickid;

   
//    //console.log(utm);
//    // console.log(med);
//     //console.log(clickid);
    
//  }

//   function error() {
//     status.innerHTML = "Oops! There was a problem.";
//   }

//   // handle the form submission event

//   form.addEventListener("submit", function(ev) {
//     ev.preventDefault();
//     var data = new FormData(form);
//     ajax(form.method, form.action, data, success, error);
//   });
// });

// // helper function for sending an AJAX request

// function ajax(method, url, data, success, error) {

//   var xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Accept", "application/json");
//   //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//   xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) {
//       success(xhr.response, xhr.responseType);
      
//     } else {
//       error(xhr.status, xhr.response, xhr.responseType);
//     }
//   };
//   xhr.send(data);
// }



$(document).ready(function() { 
    $("#contact_form").submit(function(event){
        event.preventDefault();
        if($('#contact_name').val() != '' && $('#contact_mobile').val() != '' && $('#contact_organization').val() != '' && $('#contact_email').val() != ''){

            $('#loading_img').css('display','block');
            $('#submit_button').css('pointer-event','none');
            $.ajax({ 
                type: 'POST', 
                url: 'https://ezyloads.transo.in/api/website/demoRequest',
                data: '{ "name": "'+$('#contact_name').val()+'", "phoneNumber": "'+$('#contact_mobile').val()+'", "organization": "'+$('#contact_organization').val()+'", "email": "'+$('#contact_email').val()+'" }', 
                contentType: "application/json",
                dataType: 'JSON',
                success: function (data) { 
                    if(data['success'] == true){
                        $('#form_message').css('display','block');
                        $('#form_message').css('color','green');
                        $('#form_message').html(data['message']);
                        $console.log("success");
                       setTimeout(function(){ $('#form_message').css('display','none'); }, 10000);
                        $('#contact_form').trigger("reset");
                        $('#loading_img').css('display','none');
                        $('#submit_button').css('pointer-event','all');

                    } else if(data['success'] == false){
                        $('#form_message').css('display','block');
                        $('#form_message').css('color','red');
                        $('#form_message').html(data['message']);
                        setTimeout(function(){ $('#form_message').css('display','none'); }, 10000);
                        $('#loading_img').css('display','none');
                        $('#submit_button').css('pointer-event','all');
                    }
                }
            });
        }
    });
});

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
document.querySelector(".contact_mobile").addEventListener("keypress", function (evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});


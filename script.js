	var firebaseRef=firebase.database().ref("eden");
	var temp=document.getElementById("temp");
	var light=document.getElementById("light");
	var test1=document.getElementById("test1");
	var test2=document.getElementById("test2");
	var test3=document.getElementById("test3");
	firebaseRef.child("temperature").on('value',gotData,errData);

	function gotData(data){
		//console.log(data.val());
		var val=data.val();
		var keys=Object.keys(val);
		console.log(keys);
		for(var i=0; i<keys.length; i++){
			var k=keys[i];
			var initials=val[k].initials;
			var val1=val[k].val;
			console.log(initials,val1);
		}
	}
	function errData(err){
		console.log("Error");
		console.log(err)
	}
	firebaseRef.child("temperature").limitToLast(1).on("child_added",function(snap){
		console.log(snap.val());
			var data=document.createElement("h2");
			data.innerText=(snap.val());
			temp.appendChild(data);

		})
	firebaseRef.child("humidity").limitToLast(1).on("child_added",function(snap){
		console.log(snap.val());
			var data=document.createElement("h2");
			data.innerText=(snap.val());
			light.appendChild(data);


		})
	firebaseRef.child("light_intensity").limitToLast(1).on("child_added",function(snap){
			var data=document.createElement("h2");
			data.innerText=(snap.val());
			test1.appendChild(data);


		})
	firebaseRef.child("soil_moisture").limitToLast(1).on("child_added",function(snap){
			var data=document.createElement("h2");
			data.innerText=(snap.val());
			test2.appendChild(data);


		})
	firebaseRef.child("Co2_concentration").limitToLast(1).on("child_added",function(snap){
			var data=document.createElement("h2");
			data.innerText=(snap.val());
			test3.appendChild(data);


		})
	 $(document).ready(function(){
	 	$('#dis,#full,#full2,#line').hide();
        $('#monitor').click(function(){
            $('#dis').slideToggle(700,function(){
            	$('#full').slideToggle(600,function(){
            		$('#full2').slideToggle(500,function(){
                        $('#line').slideToggle(100);
                    });
           
            		
            	});
            });
            


             
        })

        $('#dark').click(function(){
        	$('body').toggleClass("dark");
        })


    })
	
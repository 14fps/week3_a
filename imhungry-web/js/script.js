var APIURL = "https://imhungry-app.herokuapp.com"
var target;

//get restaurant
$.ajax({
	url:APIURL+"/restaurant"
}).done(function(response){
	console.log(response);
	for (var i = 0; i< response.length;i++){
		console.log(!response[i].image);
		if(response[i].image&&response[i].name&&response[i].type&&response[i].address){
			add_res(response[i].homepage,
					response[i].image,
					response[i].name,
					response[i].type,
					response[i].address)
		}
	}
})

init()

function init(){
	target = $('#resListDiv');

	$('<h1>').text("餐厅列表").addClass('align_center color_grey padding_bottom_25').appendTo(target);
}

function add_res(homepage = "#", img, res_name, res_ctg, res_add){
	var divBlock=$('<div>').addClass("rel inline_block");
	var link = $('<a>').attr('href','#');
	var img = $('<img>').addClass("z_neg").attr("src",img);
	var absDiv=$('<div>').addClass("abs width_max height_max white_text align_center");
	var res_name = $('<h2>').addClass("abs top_15 abs_align_center").text(res_name);
	var res_ctg =$('<h4>').addClass("abs top_50 abs_align_center").text(res_ctg);
	var res_add =$('<p>').addClass("abs top_70 small_text abs_align_center").text(res_add);

	res_name.appendTo(absDiv);
	res_ctg.appendTo(absDiv);
	res_add.appendTo(absDiv);
	img.appendTo(link);
	absDiv.appendTo(link);
	link.appendTo(divBlock);
	divBlock.appendTo(target);	
}




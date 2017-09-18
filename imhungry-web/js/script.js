var resArray  =[
	{
		name: 'Titos',
		ctg: 'Ethnic',
		add:'122 Walter Hardwick Ave 305 Vancouver',
		src:'img/r1.jpg'
	},

	{
		name: "Hank's Dairy Bar",
		ctg: 'Fast food',
		add:'3308 Ash St Vancouver',
		src:'img/r2.jpg'
	},

	{
		name: "D'Wine Restaurant",
		ctg: "Fast casual",
		add:'2485 Broadway W 414 Vancouver',
		src:'img/r3.jpg'
	},

	{
		name: "Basil Doc's Pizza",
		ctg: "Casual dining",
		add:'275 28th Ave E Vancouver',
		src:'img/r4.jpg'
	},

	{
		name: "Samuel's Memorable",
		ctg: "Fine dining",
		add:'106 588 45th Ave W Vancouver',
		src:'img/r5.jpg'
	},

	{
		name: "Louie's Chophouse",
		ctg: "Barbeque",
		add:'563 Union St Vancouver',
		src:'img/r6.jpg'
	},

	{
		name: "Wendal Wendonie",
		ctg: "Brasserie",
		add:'3007 8th Ave W Vancouver',
		src:'img/r7.jpg'
	},

	{
		name: "Zodiac Cafe",
		ctg: "Bistro",
		add:'110 2255 W 8th Vancouver',
		src:'img/r8.jpg'
	},

	{
		name: "Sweet Addition",
		ctg: "Buffet",
		add:'408 2260 W 10th Vancouver',
		src:'img/r9.jpg'
	},
]




/*
		<div class="rel inline_block padding_bottom_25">
			<a href="#">
				<img class="z_neg" src="img/r1.jpg">
				<div class="abs width_max height_max white_text align_center">
				
					<h2 class="abs top_15 abs_align_center">Titos</h2>
					<h4 class="abs top_50 abs_align_center">Ethnic</h4>
					<p class="abs top_70 small_text abs_align_center"> 122 Walter Hardwick Ave 305 Vancouver</p>

				</div>
			</a>
		</div>
*/
var target = $('#resListDiv');

$('<h1>').text("餐厅列表").addClass('align_center color_grey padding_bottom_25').appendTo(target);

for(var i = 0; i< resArray.length;i++){
	var divBlock=$('<div>').addClass("rel inline_block");
	var link = $('<a>').attr('href','#');
	var img = $('<img>').addClass("z_neg").attr("src",resArray[i].src);
	var absDiv=$('<div>').addClass("abs width_max height_max white_text align_center");
	var res_name = $('<h2>').addClass("abs top_15 abs_align_center").text(resArray[i].name);
	var res_ctg =$('<h4>').addClass("abs top_50 abs_align_center").text(resArray[i].ctg);
	var res_add =$('<p>').addClass("abs top_70 small_text abs_align_center").text(resArray[i].add);

	res_name.appendTo(absDiv);
	res_ctg.appendTo(absDiv);
	res_add.appendTo(absDiv);
	img.appendTo(link);
	absDiv.appendTo(link);
	link.appendTo(divBlock);
	divBlock.appendTo(target);	
}





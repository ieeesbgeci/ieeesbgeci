$(document).on('submit', '#key_form', function form_post(event) {
	event.preventDefault();
	console.log("Submitting form");
	var form = $('#key_form');
	var form_url = form.prop('action')
	var req_type = form.prop('method')
	$.ajax({
		url: form_url,
		data: {
			team:$("#team").val(),
			key:$("#key").val()
		},
		type: req_type,
		success: function (data) {
			var data = data["reply"];
			var data_span = "<div class='user_details'>"+data+"</div>";
			$("#display_data").html(data_span);
		}
	})
});
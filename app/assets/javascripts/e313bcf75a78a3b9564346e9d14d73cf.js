(function($) {
	"use strict";
	$(function() {
		$('#start').datepicker({
			dateFormat: 'dd.mm.yy',
			prevText: '<i class="fa fa-chevron-left"></i>',
			nextText: '<i class="fa fa-chevron-right"></i>',
			onSelect: function(selectedDate) {
				$('#finish').datepicker('option', 'minDate', selectedDate);
			}
		});
		$('#finish').datepicker({
			dateFormat: 'dd.mm.yy',
			prevText: '<i class="fa fa-chevron-left"></i>',
			nextText: '<i class="fa fa-chevron-right"></i>',
			onSelect: function(selectedDate) {
				$('#start').datepicker('option', 'maxDate', selectedDate);
			}
		});
		$("#sky-form").validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				interested: {
					required: true
				},
				budget: {
					required: true
				}
			},
			messages: {
				name: {
					required: 'Please enter your name'
				},
				email: {
					required: 'Please enter your email address',
					email: 'Please enter a VALID email address'
				},
				phone: {
					required: 'Please enter your phone number'
				},
				interested: {
					required: 'Please tell us about your interest'
				},
				budget: {
					required: 'Please input the number of guests'
				}
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					beforeSend: function() {
						$('#sky-form button[type="submit"]').addClass('button-uploading').attr('disabled', true);
					},
					uploadProgress: function(event, position, total, percentComplete) {
						$("#sky-form .progress").text(percentComplete + '%');
					},
					success: function() {
						$("#sky-form").addClass('submited');
						$('#sky-form button[type="submit"]').removeClass('button-uploading').attr('disabled', false);
					}
				});
			},
			errorPlacement: function(error, element) {
				error.insertAfter(element.parent());
			}
		});
});
})(jQuery);;
jQuery(document).ready(function($) {
	initTopButton();

	function initTopButton() {
		var $ = jQuery;
		$("#back-top").hide();
		$(function() {
			$(window).scroll(function() {
				if ($(this).scrollTop() > 0) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});
			$('#back-top a').click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 300);
				return false;
			});
		});
	};
	var headerView = function() {
		var scroll = $(window).scrollTop();
		if (scroll <= 0) {
			$("body").removeClass("compact");
		} else {
			$("body").addClass("compact");
		}
	}
	headerView();
	$(window).scroll(function() {
		headerView();
	});
});
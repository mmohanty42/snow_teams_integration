<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<g:evaluate var="jvar_gr" object="true">
	</g:evaluate>
	
	<a class="btn-default;" id="${jvar_n}" onclick="invokechat();">
		<img src="Microsoft Team.png" width="30" title="Popup Teams" alt="${gs.getMessage('Click to open Teams chat')}"></img>
	</a>
	
	<script>
		function invokechat()
		{
		var prefix = 'https://teams.microsoft.com/l/xxxxxxxxxxxxxxxxxxxxxxx';
		<!--  var prefix = 'https://teams.microsoft.com/1/chat/0/0?users=';
		 var firstname = g_form.getReference('caller_id').firstname;
		var user = g_form.getReference('caller_id').email); -->
		 <!-- subject = '&amp;amp;message=Hi ' + firstname + ', this is regarding your incident ' + g_form.getValue('number') + '; ' + g_form.getValue('short_description');  -->
		var w = getTopWindow();
		<!--   var url = prefix + user + subject; -->
		var url = prefix; 
	<!--  var url = prefix + subject;  -->
		w.open(url);
		}
	</script>
</j:jelly>


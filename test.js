
	$("#solve").click(function(){
		var s,c,o; // Current Account Balances
		var e,d,oi; // Current Income
		var B; // Budget Calculation
		var exp1,exp2,exp3,exp4,exp5,exp6,exp7,exp8; // expenses
        console.log(exp1,exp2,exp3,exp4,exp5,exp6,exp7,exp8);
        console.log(e,d,oi);
		s = parseFloat($("#S-acc").val());
		c = parseFloat($("#C-acc").val());
		o = parseFloat($("#O-acc").val());
		e = parseFloat($("#J-acc").val());
		d = parseFloat($("#P-acc").val());
		oi = parseFloat($("#B-acc").val());
		
		exp1 = parseFloat($("#exp1").val());
		exp2 = parseFloat($("#exp2").val());
		exp3 = parseFloat($("#exp3").val());
		exp4 = parseFloat($("#exp4").val());
		exp5 = parseFloat($("#exp5").val());
		exp6 = parseFloat($("#exp6").val());
		exp7 = parseFloat($("#exp7").val());
		exp8 = parseFloat($("#exp8").val());
		
		
        console.log(exp1,exp2,exp3,exp4,exp5,exp6,exp7,exp8);
        console.log(e,d,oi);
		// Budget Calculation
		B = c + s + o + e + d + oi - exp1 - exp2 - exp3 - exp4 - exp5 - exp6 - exp7 - exp8;
        console.log(B)
		if(!isNaN(B))
		{
			$("#bTot").val(B.toFixed(2));
		}
		else
		{
			$("#bTot").val('There was an error');
		}
		return false;
	});
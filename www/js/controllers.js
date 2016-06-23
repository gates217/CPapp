angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('diagnosisTestCtrl', function($scope) {
	$scope.title = "Assessment";
	$scope.submitted = false;
	$scope.atRisk = false;
	$scope.pFlag = false;
	$scope.wFlag = false;
	$scope.cFlag = false;
	$scope.total = 0;
	$scope.items = [{
	category: "Biological",
	questions: [{
			question: "1). You struggle with daily movements or activities.",
			answer: -1,
			edited: false
		},{
			question: "2). You still do things, despite the pain.",
			answer: -1,
			edited: false
		},{
			question: "3). You find it difficult to sleep.",
			answer: -1,
			edited: false
		},{
			question: "4). You have been feeling distressed.",
			answer: -1,
			edited: false
		},{
			question: "5). Have you been feeling low or down recently?",
			answer: -1,
			edited: false
		},{
			question: "6). Are there any specific movements or activities that you avoid?",
			answer: -1,
			edited: false
		},{
			question: "7). Is any aspect of your problem especially worrying to you?",
			answer: -1,
			edited: false
		},{
			question: "8). Do others respond to you when the pain is especially severe?",
			answer: -1,
			edited: false
		},{
			question: "9). Do you still do things, despite the pain?",
			answer: -1,
			edited: false
		},{
			question: "10). Have any treatments made a difference to what you can do?",
			answer: -1,
			edited: false
		}]
	},
	{
	category: "Psychological",
	questions: [{
			question: "1). You have been feeling distressed.",
			answer: -1,
			edited: false
		},{
			question: "2). You think that your pain will improve.",
			answer: -1,
			edited: false
		},{
			question: "3). You are satisfied with your life.",
			answer: -1,
			edited: false
		},{
			question: "4). You feel supported by other people.",
			answer: -1,
			edited: false
		},{
			question: "5). Are there stressful elements to your job that you find difficult?",
			answer: -1,
			edited: false
		},{
			question: "6). Are there parts of your job you can still do?",
			answer: -1,
			edited: false
		},{
			question: "7). Has your employer made contact with you since you stopped working?",
			answer: -1,
			edited: false
		}]
	
	},
	{
	category: "Social",
	questions: [{
			question: "1). You feel encouraged to return to social activities..",
			answer: -1,
			edited: false
		},{
			question: "2). You can rely on your family to assist you.",
			answer: -1,
			edited: false
		},{
			question: "3). You understand what has been planned to help you",
			answer: -1,
			edited: false
		},{
			question: "4). Have you heard of any new treatments that are available?",
			answer: -1,
			edited: false
		},{
			question: "5). Is there a policy for helping someone return to work?",
			answer: -1,
			edited: false
		}]
	
	}];
	$scope.dynamicBar = "bar bar- bar-calm";
	$scope.indexToShow = 0;
	$scope.questionsAnswered = false;
    $scope.incrementIndex = function(){
		var count = 0;
		var questionsLength = $scope.items[$scope.indexToShow].questions.length;
		for(var i = 0; i < questionsLength; i++) {
			if($scope.items[$scope.indexToShow].questions[i].edited) {
				count++;
			}
		}
		
		if(count === questionsLength) {
			$scope.questionsAnswered = false;
			$scope.indexToShow = $scope.indexToShow + 1;
			if($scope.indexToShow==1) {	
				$scope.dynamicBar = "bar bar- bar-assertive";
			} else  if($scope.indexToShow==2) {
				$scope.dynamicBar = "bar bar- bar-royal";
			} else {
				$scope.submitted = true;
				
				// Algorithm goes HERE!
				calculateResults();
				
				$scope.title = "Results";
			}
		} else {
			$scope.questionsAnswered = true;
		}
    }
	    
	$scope.updateOptions = function(question) {
		question.edited=true;
		/*for(var i = 0; i < $scope.items[0].questions.length; i++) {
				console.log('Item ' + i + ' edited: ' + $scope.items[0].questions[i].edited);
				console.log('Item ' + i + ' answer: ' + $scope.items[0].questions[i].answer);
		}
		console.log('Options Set!');*/
	}
		
	function calculateResults() {
		var pTotal = 0;
		var wTotal = 0;
		var cTotal = 0;
		$scope.total = $scope.items[0].questions.length + $scope.items[1].questions.length + $scope.items[2].questions.length;
		var result = 0;
		
		// Calculate Personal Total
		for(var i = 0; i < $scope.items[0].questions.length; i++) {
			if($scope.items[0].questions[i].answer === 1) {
				pTotal++;
			}
		}
		
		// Calculate Workplace Total
		for(var i = 0; i < $scope.items[1].questions.length; i++) {
			if($scope.items[1].questions[i].answer === 1) {
				wTotal++;
			}
		}
		
		// Calculate Context Total
		for(var i = 0; i < $scope.items[2].questions.length; i++) {
			if($scope.items[2].questions[i].answer === 1) {
				console.log($scope.items[2].questions[i].answer);
				cTotal++;
			}
		}

		// Check what categories the patient scored highly in
		//Personal
		if(pTotal >= $scope.items[0].questions.length/2) {
			$scope.pFlag = true;
		}
		
		//Workplace
		if(wTotal >= $scope.items[1].questions.length/2) {
			$scope.wFlag = true;
		}
		
		//Context
		if(cTotal >= $scope.items[2].questions.length/2) {
			$scope.cFlag = true;
		}
		
		result = pTotal + wTotal + cTotal;
		console.log(result);
		console.log(cTotal);
		if(result >= $scope.total/2) {
			$scope.atRisk = true;
		}
	}
 
})
   
.controller('resultsCtrl', function($scope) {

})
   
.controller('results2Ctrl', function($scope) {

})
   
.controller('contactUsCtrl', function($scope) {

})
      
.controller('diagnosisTest2Ctrl', function($scope) {

})
   
.controller('diagnosisTest3Ctrl', function($scope) {

})
 
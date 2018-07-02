alert("It's 1970, and the world's greatest rock and roll band has just broken up. As one of the band members, you must decide what to do next. Keep in mind that your very awesomeness is at stake.")

var john = confirm('Are you John?')
if (john) {
	alert('You are John Lennon.')
	lennon()
} else {
	alert('You are another Beatle.')
	var paul = confirm('Are you Paul?')
	if (paul) {
		alert('You are Paul McCartney.')
		mccartney()
	} else {
		alert('You are another Beatle.')
		var george = confirm('Are you George?')
		if (george) {
			alert('You are George Harrison.')
			harrison()
		} else {
			alert('You are another Beatle.')
			var ringo = confirm('Are you Ringo?')
			if (ringo) {
				alert('You are Ringo Starr.')
				starr()
			} else {
				alert('You are Pete Best. You missed your shot at awesomeness.')
			}
		}
	}
}

function lennon() {
	var lennonScore = 100
	var retired = confirm('Do you want to retire?')
	if (retired) {
		alert('You retire to New York City and your legacy with The Beatles endures. You remain ' + lennonScore + '% awesome!')
	} else {
		alert('You continue working.')
		var continued = confirm('Do you want to join a new group?')
		if (continued) {
			lennonScore -= 25
			alert('You form the Plastic Ono Band and must endure the squawking of Yoko Ono. Your awesomeness decreases to ' + lennonScore + '%.')
		} else {
			lennonScore += 25
			alert('You pursue a solo career that includes songs like Watching The Wheels. Your awesomeness increases to ' + lennonScore + '%!')
		}
	}	
}

function mccartney() {
	var mccartneyScore = 100
	var retired = confirm('Do you want to retire?')
	if (retired) {
		alert('You retire to rural Scotland and your legacy with The Beatles endures. You remain ' + mccartneyScore + '% awesome!')
	} else {
		alert('You continue working.')
		var continued = confirm('Do you want to join a new group?')
		if (continued) {
			mccartneyScore -= 25
			alert('You form Wings and must teach Linda Eastman to play the piano. Your awesomeness decreases to ' + mccartneyScore + '%.')
		} else {
			mccartneyScore += 25
			alert("You pursue a solo career that includes songs like Maybe I'm Amazed. Your awesomeness increases to " + mccartneyScore + "%!")
		}
	}	
}

function harrison() {
	var harrisonScore = 100
	var retired = confirm('Do you want to retire?')
	if (retired) {
		alert('You retire to rural England and your legacy with The Beatles endures. You remain ' + harrisonScore + '% awesome!')
	} else {
		alert('You continue working.')
		var continued = confirm('Do you want to join a new group?')
		if (continued) {
			harrisonScore += 100
			alert('You join forces with Monty Python and produce films like The Rutles. Your awesomeness increases to ' + harrisonScore + '%!')
		} else {
			harrisonScore += 50
			alert('You pursue a solo career that includes songs like What Is Life. Your awesomeness increases to ' + harrisonScore + '%!')
		}
	}	
}

function starr() {
	var starrScore = 100
	var retired = confirm('Do you want to retire?')
	if (retired) {
		alert('You retire to Los Angeles and your legacy with The Beatles endures. You remain ' + starrScore + '% awesome!')
	} else {
		alert('You continue working.')
		var continued = confirm('Do you want to join a new group?')
		if (continued) {
			starrScore += 25
			alert('You form The All-Starr Band with fellow rock stars like Peter Frampton. Your awesomeness increases to ' + starrScore + '%!')
		} else {
			starrScore -= 25
			alert('You pursue a solo career that includes songs like Photograph. Your awesomeness decreases to ' + starrScore + '%.')
		}
	}	
}

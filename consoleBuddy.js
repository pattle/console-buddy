var $consoleBuddy = {
	log: function($message, $type) {

		//Define some variables we'll use
		var $typeStyle = '';
		var $tagStyle = '';
		var $tagUnStyle = '';

		//We need a message to be able to do anything
		if(!$message) {
			console.log("Please make sure you enter a message (e.g $consoleBuddy.log('Hello World');");
			return false;
		}

		if($type === 'uppercase') {
			$typeStyle = 'text-transform: uppercase';
		}
		if($type === 'success') {
			$typeStyle = 'color: #ffffff; background: #9dcf24; border: 1px solid #7eae0c;';
		}
		if($type === 'warning') {
			$typeStyle = 'color: #ffffff; background: #de8e0f; border: 1px solid #b8760e;';
		}
		if($type === 'error') {
			$typeStyle = 'color: #ffffff; background: #d93625; border: 1px solid #a71c0d;';
		}
		if($type === 'info') {
			$typeStyle = 'color: #ffffff; background: #1d69db; border: 1px solid #0f4ba6;';
		}
		if($type === 'pink') {
			$typeStyle = 'color: #ffffff; background: #db178a; border: 1px solid #ae0c6b;';
		}
		if($type === 'chalkboard') {
			$typeStyle = 'color: #ffffff; background: #000000; border: 1px solid #000000;';
		}
		if($type === 'tiger') {
			$typeStyle = 'color: #ffffff; background: repeating-linear-gradient(-45deg, #e5910d, #e5910d 10px, #000000 10px, #000000 20px); border: 1px solid #000000;';
		}
		if($type === 'rainbow') {
			$typeStyle = 'color: #000000; background-image: linear-gradient(90deg, #ff0000 0%, #ffff00 15%, #00ff00 30%, #00ffff 50%, #0000ff 65%, #ff00ff 80%, #ff0000 100%); border: 1px solid #000000;';
		}

		//Check to see if <b> tag is present in the message
		if($message.search(/<(\/?b>)/img) > -1) {
			$tagStyle += 'font-weight: bold;';
			$tagUnStyle += 'font-weight: normal;';
		}

		//Check to see if <i> tag is present in the message
		if($message.search(/<(\/?i>)/img) > -1) {
			$tagStyle += 'font-style: italic;';
			$tagUnStyle += 'font-style: normal;';
		}

		//Check to see if <u> tag is present in the message
		if($message.search(/<(\/?u>)/img) > -1) {
			$tagStyle += 'text-decoration: underline;';
			$tagUnStyle += 'text-decoration: none;';
		}

		//Do we have both a type and 
		if($typeStyle && $tagStyle) {
			console.log('%c ' + $message.replace(/(<\/?[uib]>)+/img, "%c") + ' ', $typeStyle + 'border-right: none; border-radius: 3px 0 0 3px;', $typeStyle + $tagStyle + 'border-left: none; border-right: none;', $typeStyle + $tagUnStyle + 'border-left: none; border-radius: 0 3px 3px 0;');
		} else if($typeStyle) {
				console.log('%c ' + $message + ' ', $typeStyle + 'border-radius: 3px;');
		} else if($tagStyle) {
				console.log($message.replace(/(<\/?[uib]>)+/img, "%c"), $tagStyle, $tagUnStyle);
		} else {
			console.log($message);
		}
	}
}
console.log("Hey!");

<script>
 // register plugin
  gsap.registerPlugin(SplitText);
  
  gsap.set("h1", { opacity: 1 });

	let split = SplitText.create("#heading", { type: "words" });
	//now animate each character into place from 20px below, fading in:
	gsap.from(split.words, {
  	y: 20,
 	  autoAlpha: 0,
  	stagger: 0.1
});

  gsap.from(".span-primitives", {
    backgroundColor: '#000000', 
    duration: 1.5, 
    ease: "power1.in",})
  
  gsap.from(".span-endtoend", {
    backgroundColor: '#000000', 
    duration: 1.5, 
    ease: "power1.in",})
  
  gsap.from(".span-ts", {
	backgroundColor: '#000000', 
  duration: 1.5, 
  ease: "power1.in",})
  
</script>
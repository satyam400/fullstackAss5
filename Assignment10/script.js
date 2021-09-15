togle = () => {
  console.log("In toglle");
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.left = sidebar.style.left != "0%" ? "0%" : "-20%";
  let main = document.getElementsByClassName("main-content")[0];
  main.style.paddingLeft =
    main.style.paddingLeft != "calc(20% + 10px)" ? "calc(20% + 10px)" : "10px";
    // console.log(main.style)
    let bars =  document.getElementById("change-bar");
    if(bars.className==='fa fa-times'){
        bars.className = 'fa fa-bars';
        console.log('in sec');
    }
    else{
        bars.className = 'fa fa-times';
    }
};

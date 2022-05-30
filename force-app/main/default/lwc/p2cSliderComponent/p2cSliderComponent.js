import { LightningElement,api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val = 0;
     changeHandler(event){
         this.val = event.target.value;
  // this.sliderData.val = event.target.value;
        // const newv = event.target.value;
        //  const newArray = { ...this.sliderData, val: newv };
        // //  const newArray = this.sliderData.forEach(array => {
        // //      ...array,val:
        // //  })
        //  sumPlease(newArray);
         
     }
//     sliderData = [
//         {
//             serial: 1,
//             val: 10
//         },
//         {
//             serial: 2,
//             val: 0
//         },
//         {
//             serial: 3,
//             val: 45
//         }
//     ];
    //sumPlease() {
       // console.log('sumPlease called');
   // }
    // renderedCallback() {
    //     const newArr = this.sliderData;
    //     this.sum = newArr.reduce(function (acc, curr) {
    //         acc += curr.val;
    //         return acc;
    //     }, 0);
    //     console.log("called connected callback");
    //}

    @api resetSlider(){
        this.val = 0;
     }
   // sumNow(event) {
        //const newval = this.sliderData.val;
        // this.sum = this.sum + this.sliderData.parseInt(newval);
    //     this.sum = event.target.value;
    //     console.log("sum mow called");
    // }
    
    // sumHandler() {
    //     const myEvent = new CustomEvent('slide', {
    //         bubbles:true,
            
    //                               });
    //     this.dispatchEvent(myEvent);
    // }
}

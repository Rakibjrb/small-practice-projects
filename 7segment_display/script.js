const bcd1_right_segment = document.querySelectorAll(".bcd1_right_segment");
const mod6_1_segment = document.querySelectorAll(".mod6_1_segment");
const bcd2_right_segment = document.querySelectorAll(".bcd2_right_segment");
const mod6_2_segment = document.querySelectorAll(".mod6_2_segment");
const bcd3_right_segment = document.querySelectorAll(".bcd3_right_segment");
const mod2_segment = document.querySelectorAll(".mod2_segment");

//class add function
const classListAdd = (element, addClass) => {
  element.classList.add(addClass);
};

//class remove function
const classListRemove = (element, removeClass) => {
  element.classList.remove(removeClass);
};

//bcd segment handler on counter condition which is count to 9 then reset to 0
const bcd_segment_handler = (counter = 0, bcd_name) => {
  switch (counter) {
    case 0:
      bcd_name.forEach((element, index) => {
        if (index === 6) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 1:
      bcd_name.forEach((element, index) => {
        if (index == 1 || index == 2) {
          classListRemove(element, "segment_hide");
        } else {
          classListAdd(element, "segment_hide");
        }
      });
      break;
    case 2:
      bcd_name.forEach((element, index) => {
        if (index == 2 || index == 5) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 3:
      bcd_name.forEach((element, index) => {
        if (index == 4 || index == 5) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 4:
      bcd_name.forEach((element, index) => {
        if (index == 0 || index == 3 || index == 4) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 5:
      bcd_name.forEach((element, index) => {
        if (index == 1 || index == 4) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 6:
      bcd_name.forEach((element, index) => {
        if (index == 1) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 7:
      bcd_name.forEach((element, index) => {
        if (index == 3 || index == 4 || index == 5 || index == 6) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 8:
      bcd_name.forEach((element) => {
        classListRemove(element, "segment_hide");
      });
      break;
    case 9:
      bcd_name.forEach((element, index) => {
        if (index == 4) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
  }
};

//mod6 segment handler on counter condition which is count to 5 then reset to 0
const mod6_segment_handler = (counter = 0, mod6_name) => {
  switch (counter) {
    case 0:
      mod6_name.forEach((element, index) => {
        if (index === 6) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 1:
      mod6_name.forEach((element, index) => {
        if (index == 1 || index == 2) {
          classListRemove(element, "segment_hide");
        } else {
          classListAdd(element, "segment_hide");
        }
      });
      break;
    case 2:
      mod6_name.forEach((element, index) => {
        if (index == 2 || index == 5) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 3:
      mod6_name.forEach((element, index) => {
        if (index == 4 || index == 5) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 4:
      mod6_name.forEach((element, index) => {
        if (index == 0 || index == 3 || index == 4) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 5:
      mod6_name.forEach((element, index) => {
        if (index == 1 || index == 4) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
  }
};

//mod2 counter handler
const mod2_segment_handler = (counter = 0, mod2_name) => {
  switch (counter) {
    case 0:
      mod2_name.forEach((element, index) => {
        if (index === 6) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 1:
      mod2_name.forEach((element, index) => {
        if (index == 1 || index == 2) {
          classListRemove(element, "segment_hide");
        } else {
          classListAdd(element, "segment_hide");
        }
      });
      break;
  }
};

//main counder handler and logic
const bcd1_counter = () => {
  let counter_bcd = 0;
  let counter_mod6 = 0;
  let counter_bcd2 = 0;
  let counter_mod6_2 = 0;
  let counter_bcd3 = 0;
  let counter_mod2 = 0;

  setInterval(() => {
    //count main second
    counter_bcd = counter_bcd + 1;

    //first check for second mod6
    if (counter_bcd === 10) {
      counter_bcd = 0;
      //count increase for mod6
      counter_mod6 = counter_mod6 + 1;

      //check miniute bcd for count 0 to 9
      if (counter_mod6 === 6) {
        counter_mod6 = 0;
        //this for count miniute when mod6_1 finished the count to 5
        counter_bcd2 = counter_bcd2 + 1;

        if (counter_bcd2 === 10) {
          counter_bcd2 = 0;
          counter_mod6_2 = counter_mod6_2 + 1;

          if (counter_mod6_2 === 6) {
            counter_mod6_2 = 0;

            //mod 2 counter logic
            if (counter_mod2 === 1) {
              counter_bcd3 = counter_bcd3 + 1;

              if (counter_bcd3 === 3) {
                counter_bcd = 0;
                counter_mod6 = 0;
                counter_bcd2 = 0;
                counter_mod6_2 = 0;
                counter_bcd3 = 1;
                counter_mod2 = 0;
                mod2_segment_handler(0, mod2_segment);
              }
            } else {
              counter_bcd3 = counter_bcd3 + 1;
            }

            if (counter_bcd3 === 10) {
              counter_bcd3 = 0;
              counter_mod2 = counter_mod2 + 1;

              mod2_segment_handler(counter_mod2, mod2_segment);
            }

            bcd_segment_handler(counter_bcd3, bcd3_right_segment);
          }
          mod6_segment_handler(counter_mod6_2, mod6_2_segment);
        }

        //remove class from segment className on every second
        bcd_segment_handler(counter_bcd2, bcd2_right_segment);
      }
      mod6_segment_handler(counter_mod6, mod6_1_segment);
    }

    //remove class from segment className on every second
    bcd_segment_handler(counter_bcd, bcd1_right_segment);
  }, 1000);
};

//second count part
bcd1_counter();
mod6_segment_handler(0, mod6_1_segment);

//miniute count part
bcd_segment_handler(0, bcd2_right_segment);
mod6_segment_handler(0, mod6_2_segment);

//hour count part
bcd_segment_handler(1, bcd3_right_segment);
mod2_segment_handler(0, mod2_segment);
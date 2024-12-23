$(document).ready(function () {
  /*dashoabrd*/
  var profileMenu = document.getElementById("profile");
  profileMenu.onclick = function () {
    var menuList = document.getElementById("profileMenu");
    menuList.classList.toggle("menu__show");
  };

  document.getElementById("copyShifCancelBtn")?.addEventListener("click", () => {
    document.getElementById("copyShiftDialog").close();
  });
  document.getElementById("editShifCancelBtn")?.addEventListener("click", () => {
    document.getElementById("editShiftDialog").close();
  });
// Keep track of the currently open menu
let currentlyOpenMenu = null;
var tableMenuItems = document.querySelectorAll("tbody tr");
tableMenuItems.forEach(function (item) {
  item.onclick = function (event) {
    if (event.target && event.target.id === "copyShiftBtn") {
      document.getElementById("copyShiftDialog").showModal();
    } else if (event.target && event.target.id === "editShiftBtn") {
      document.getElementById("editShiftDialog").showModal();
    }
    // If there's an open menu in a different `tr`, remove it first
    if (currentlyOpenMenu && currentlyOpenMenu !== item) {
      const previousMenu = currentlyOpenMenu.querySelector("#trMenu");
      if (previousMenu) {
        previousMenu.remove();
      }
    }

    // Check if the menu already exists in the clicked `tr`
    const existingMenu = item.querySelector("#trMenu");
    if (existingMenu) {
      // If it exists, remove it (close the menu)
      existingMenu.remove();
      currentlyOpenMenu = null; // Reset the open menu tracker
    } else {
      // Otherwise, add the menu to the second `td` of the clicked `tr`
      const html = `
        <ul class="profile__menu--container" id="trMenu">
        <li><button type="button" id="editShiftBtn">Edit</button></li>
        <li><button type="button" id="copyShiftBtn">Duplicate</button></li>
        <li><button type="button">Delete</button></li>
        </ul>
      `;

      const secondTd = item.querySelectorAll("td")[1];
      if (secondTd) {
        secondTd.insertAdjacentHTML("beforeend", html);
        secondTd.style.position = 'relative';
      }

      // Update the tracker to the current `tr`
      currentlyOpenMenu = item;
    }
  };
});

  

  /*Left dropdown menu*/
  var sidebar = document.getElementById("dropdown");
  var menuList = document.getElementById("dropdownMenu");
  sidebar.onclick = function () {
    menuList.classList.toggle("menu__show");
    document.querySelector("#dropdown > svg").classList.toggle("rotate");
  };

  /*Left menu*/
  var navMenu = document.getElementById("navBar");
  navMenu.onclick = function () {
    var menuList = document.getElementById("leftMenu");
    menuList.classList.toggle("navmenu__show");
  };

  /*Menu bar*/

  document.querySelector("#navBar").addEventListener("click", function () {
    document.querySelector("#navBar").classList.toggle("cross__menu--bar");
  });

  /*accordion*/
  if (document.getElementById("headingOne")) {
    document
      .getElementById("headingOne")
      .addEventListener("click", function () {
        document.getElementById("headingOne").classList.toggle("headingRotate");
        const toggle = document
          .getElementById("collapseOne")
          .classList.toggle("display_acc");
      });
    document
      .getElementById("headingOne2")
      .addEventListener("click", function () {
        document
          .getElementById("headingOne2")
          .classList.toggle("headingRotate");
        const toggle = document
          .getElementById("collapseOne2")
          .classList.toggle("display_acc");
      });
  }

  $(".page__count").click(function () {
    var add = $(".page__count");
    add.removeClass("page__fill");
    $(this).addClass("page__fill");
  });

  if (document.querySelector(".chat__head--container")) {
    $(".each__chat--head").click(function () {
      console.log("this");
      $(".each__chat--head").removeClass("active__chat--head");
      $(this).addClass("active__chat--head");
    });
  }

  if (document.querySelector(".job__listings")) {
    document.querySelectorAll(".action__btn").forEach(function (e) {
      e.addEventListener("click", function (el) {
        if (el.target.classList.contains("job__listings")) {
          el.target.classList.toggle("job__action--btn");
        }
      });
    });

    window.addEventListener("click", function (e) {
      if (!e.target.classList.contains("job__listings")) {
        console.log("yes");
        document
          .querySelector(".job__listings")
          .classList.remove("job__action--btn");
      }
    });
  }

  //   if (document.getElementById("headerdropdown")) {
  //     document.querySelector(".li__one").addEventListener("click", function () {
  //       document.querySelector(".header__profile").innerHTML = "Account Profile";
  //     });
  //     document.querySelector(".li__two").addEventListener("click", function () {
  //       document.querySelector(".header__profile").innerHTML = "Own Profile";
  //     });
  //   }

  document.getElementById("sortBtn").addEventListener("click", () => {
    document.getElementById("sortDialog").showModal();
  });

  document.getElementById("cancelBtn").addEventListener("click", () => {
    document.getElementById("sortDialog").close();
  });

  document.getElementById("submitBtn").addEventListener("click", () => {
    document.getElementById("sortDialog").close();
  });
  //filter dialog
  document.getElementById("filterBtn").addEventListener("click", () => {
    document.getElementById("filterDialog").showModal();
  });
  document.getElementById("filterCancelBtn").addEventListener("click", () => {
    document.getElementById("filterDialog").close();
  });

  document.getElementById("filterSubmitBtn").addEventListener("click", () => {
    document.getElementById("filterDialog").close();
  });
});

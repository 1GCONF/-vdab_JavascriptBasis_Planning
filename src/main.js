this.onload = () => {
  /*
  Maak een pagina waarin de gebruiker zijn planning (todo’s) voor de volgende 10 dagen kan typen.
  Als de systeemdatum bijvoorbeeld 27/6/2019 is, ziet de pagina er zo uit:
  Tip: je wijzigt de variabele datum (die een Date object bevat) naar de volgende kalenderdag met:
  datum.setDate(datum.getDate() + 1)

  */
  function section_kalender_create() {
    //HTML Create Section Skeleton
    const section = document.createElement("section");
    section.className = "kalender";

    const html_titels_ul = document.createElement("ul");
    html_titels_ul.className = "titel_items";

    const html_todos_ul = document.createElement("ul");
    html_todos_ul.className = "todo_items";

    section.append(html_titels_ul, html_todos_ul);
    document.body.append(section);
    return section;
  }
  function sectionKalenderAppendTodos(sectionElement) {
    // vars titels
    const array_rubrieken = ["Datum", "TODO"];
    const html_titels_ul = sectionElement.querySelector(".titel_items");
    // vars todos
    const html_todos_ul = sectionElement.querySelector(".todo_items");
    const aantal_todos = 10;
    // HTML append titel_items
    for (const titel of array_rubrieken) {
      const li = document.createElement("li");
      li.className = "titel_item";
      li.classList.add(`titel_${titel.toLowerCase()}`);
      const h2 = document.createElement("h2");
      h2.className = "titel_item_h2";
      h2.textContent = titel;
      li.append(h2);
      html_titels_ul.append(li);
    }
    // HTML append todo_items
    for (let i = 0; i < aantal_todos; i++) {
      const li = document.createElement("li");
      li.className = "todo_item";
      const p_datum = document.createElement("p");
      p_datum.className = "todo_item_content";
      p_datum.textContent = "datum";
      const datum = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() + i
      );
      const dag = datum.getDate();
      const maand = datum.getMonth();
      const jaar = datum.getFullYear();
      p_datum.textContent = `${dag}-${maand}-${jaar}`;
      const input_todotext = document.createElement("input");
      input_todotext.className = "todo_item_content";
      li.append(p_datum, input_todotext);
      html_todos_ul.append(li);
    }
  }
  const section_kalender = section_kalender_create();
  sectionKalenderAppendTodos(section_kalender);
};

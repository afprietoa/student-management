export const clearTableElements: (tElement:HTMLElement|null) =>void=(tElement) =>{

    while (tElement?.firstChild) {
        tElement.removeChild(tElement.firstChild);
      }
}
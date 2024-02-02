<script>
	import { images } from './images.js';

  
  let is_checkbox  = true;
  let checkCount = 0;
  let dragStartIndex;
  let items = $images;
  console.log("out" ,items)

  function deleteImage(){
    items = items.filter(item => !item.checked);
     images.set(items); 
  }

  function handleCheck(image){
    checkCount = items.filter(item => item.checked ).length;
    console.log(checkCount)
  }

  function dragStart(e,index){
    dragStartIndex = index;
    console.log("start", dragStartIndex)
  }
  function dragOver(e,index){
    e.preventDefault();
  }
   
  function drop(e, index){
    let dragEndIndex = index;
    console.log("end", index)
  	items = swap(items, dragStartIndex, dragEndIndex);
    console.log("drop", items)
		dragStartIndex = null;
  }

  
  function swap(items, from, to) {
    let arr = [...items];
		[arr[from], arr[to]] = [arr[to], arr[from]]
    console.log([arr[from], arr[to]])
    images.set(arr); 
		return arr;
	}
</script>
<div class="card">
  <header class="card-header p-3">
   
    {#if checkCount > 0}
       <p class="card-header-title has-text-weight-bold is-flex is-justify-content-space-between">
        <input type="checkbox" checked class="ml-3 mt-2"> <span class="ml-5">{checkCount} {checkCount > 1 ? "Files" : "File"} Selected</span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span class="has-text-danger" on:click={deleteImage}>Delete {checkCount > 1 ? "Files" : "File"}</span>
    </p>
    {:else}
     <p class="card-header-title has-text-weight-bold is-1 px-6">
      Gallery
    </p>
    {/if}
   
  </header>
  <div class="grid-container">
    {#each $images as image, index }
        <div class="{index === 0 ? "large-item" : "item"}" draggable="true"
        on:dragstart={(event) => dragStart(event,index)} 
        on:dragover|preventDefault={(event) => dragOver(event,index)}
        on:drop={(event) => drop(event,index)}
        >
          <figure class="image is-1by1">
            <img src={image.img} alt="img">
          </figure>   
            <input type="checkbox" class="is-checked" bind:checked={image.checked} on:change={handleCheck} >
        </div>
    {/each}
  </div>
</div>

<style>
  .card{
    margin: 20px 400px;
  }
.grid-container{
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 20px;
  padding: 30px;
}

.grid-container .item{
  border: 1px solid gray;
  align-items: center;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  cursor:  pointer;
}
.card-header > p  input[type="checkbox"]{
  display: block;
}
.grid-container div figure img{
  border-radius: 6px;
  width: 100%; 
  height: 100%;
  transition: background 0.3s;
}

.grid-container div figure::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: opacity 0.3s;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: none; 
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2;
}

.grid-container > div:hover input[type="checkbox"],
input[type="checkbox"]:checked {
  display: block;
}

.grid-container div figure:hover::after {
  background: rgba(4, 3, 3, 0.5);
  opacity: 1;
}
.large-item{
  grid-column: 1/3;
  grid-row: 1/3;
  position: relative;
  border: 1px solid gray;
  border-radius: 5px;
}


.has-text-danger{
  cursor: pointer;
}

</style>



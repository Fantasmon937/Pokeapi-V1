<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pokedex</title>

    <link rel="stylesheet" href="{{asset('css/PokeAPI.css')}}" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossorigin="anonymous"
    />
  </head>

  <body>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
      crossorigin="anonymous"
    ></script>
    <script src="{{asset('js/PokeAPI.js')}}"></script>
    <div class="content">
      <div
        id="content_box"
        class="position-absolute top-50 start-50 translate-middle"
      >
        <div id="views">
          <button class="view_item" onclick="updatePokemon()">
            Show Pokemon
          </button>
        </div>

        <div id="pokemon_info" class="col d-flex align-items-start">
          <div class="col-4">
            <div class="card shadow-sm p-1">
              <img
                id="pokemon_img"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                class="img-thumbnail bg-dark"
              />
            </div>
          </div>

          <div class="card bg-dark p-4" style="width: 100%; height: 100%">
            <div id="pokemon_data" class="row">
              <div class="d-flex justify-content-center">
                <h1
                  id="pokemon_name"
                  class="bg-dark card p-2"
                  style="color: white"
                ></h1>
              </div>
              <div class="d-flex justify-content-star">
                <div class="col-5">
                  <h1 id="pokemon_id" class="bg-dark card" style="color: white"></h1>
                </div>
                <div class="col-9">
                  <div class="d-flex justify-content-center">
                    <div id="pokemon_types" class="text_center"></div>
                  </div>
                </div>
              </div>

              <div class="card p-1 bg-dark">
                <h6 id="pokemon_height" class="card p-2"></h6>
                <h6 id="pokemon_weight" class="card p-2"></h6>
              </div>
            </div>
          </div>
        </div>
        <h4 id="pokemon_description" class="card p-3"></h4>
      </div>
    </div>
  </body>
</html>

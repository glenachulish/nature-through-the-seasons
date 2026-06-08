#!/bin/bash
set -e
SRC="Photos from Wikimedia Commons"
OUT="images"
mkdir -p "$OUT"

convert_one() {
  local sub="$1" key="$2" slug="$3"
  local f
  f=$(find "$SRC/$sub" -maxdepth 1 -type f -name "*$key*" ! -name "*(1)*" | head -n 1)
  if [ -z "$f" ]; then
    echo "  !! NOT FOUND: [$sub] *$key*  (slug: $slug) — skipped"
    return
  fi
  magick "$f" -resize 800x -quality 72 -strip "$OUT/$slug.webp"
  printf "  ok  %-26s <- %s\n" "$slug.webp" "$(basename "$f")"
}

echo "== MARCH =="
convert_one March "Greater_Spotted_Woodpecker" woodpecker
convert_one March "Bufo_bufo" toad
convert_one March "Woodfrog_tadpole" tadpole
convert_one March "Triturus_cristatus" newt
convert_one March "Buff-tailed_bumblebee" buff-tailed-bumblebee
convert_one March "Polygonia_c-album" comma
convert_one March "Dog_Whelks" dog-whelk
convert_one March "Primula_vulgaris" primrose
convert_one March "Ficaria_verna" lesser-celandine
convert_one March "Narcissus_flowers" daffodil
convert_one March "Lords_and_ladies" lords-and-ladies
convert_one March "Anemone_nemorosa" wood-anemone
convert_one March "Sallow_" sallow-catkins

echo "== MAY =="
convert_one May "West_European_Hedgehog" hedgehog
convert_one May "Common_Swift" swift
convert_one May "House_Martin" house-martin
convert_one May "Sand_Martin" sand-martin
convert_one May "Red-throated_diver" diver
convert_one May "Jaszczurka" sand-lizard
convert_one May "Gasterosteus_aculeatus" stickleback
convert_one May "Common_rudd" rudd
convert_one May "Small_pearl-bordered" pearl-bordered-fritillary
convert_one May "Palomena.prasina" shield-bug
convert_one May "Schulstra" blossom
convert_one May "Heracleum_candolleanum" umbellifer
convert_one May "Gorse_at_Howth" gorse
convert_one May "Viola_canina" dog-violet
convert_one May "Orchis_mascula" early-purple-orchid

echo "== JUNE =="
convert_one June "Fox_Cub" fox-cub
convert_one June "Grey_seal_pup" grey-seal-pup
convert_one June "Arctic_tern" tern
convert_one June "Puffin_" puffin
convert_one June "Tordalk" razorbill
convert_one June "Common_murre" guillemot
convert_one June "Klappergrasm" whitethroat
convert_one June "Fulmar_" fulmar
convert_one June "Lepadogaster_purpurea" cornish-sucker
convert_one June "Common_Newt" newt-june
convert_one June "Carcinus_maenas" common-shore-crab
convert_one June "Lucanus_cervus" stag-beetle
convert_one June "Skorpion" scorpion-fly
convert_one June "Erynnis_tages" dingy-skipper
convert_one June "Polyommatus_icarus" common-blue
convert_one June "Pararge_aegeria" speckled-wood-june
convert_one June "Sea_Thrift" thrift
convert_one June "Orobanche_rapum" greater-broomrape
convert_one June "Common_Dodder" common-dodder
convert_one June "Ophrys_apifera" bee-orchid
convert_one June "Digitalis_purpurea" foxglove
convert_one June "Silene_flos-cuculi" ragged-robin
convert_one June "Sambucus_nigra" elder
convert_one June "Rhinanthus_minor" yellow-rattle
convert_one June "Leucanthemum_vulgare" ox-eye-daisy
convert_one June "Ranunculus_dissectus" buttercup
convert_one June "Skylark_2" skylark-june

echo ""
echo "Done. Files in ./images/"
ls -lh "$OUT"/*.webp | awk '{print "  "$5"  "$9}'

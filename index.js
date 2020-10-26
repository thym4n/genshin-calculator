//static stat damage function
function static_damage(){
  //get stats from text fields
  var base_atk = parseFloat(document.getElementById("base_attack").value);
  var percent_atk = parseFloat(document.getElementById("percent_attack").value)/100;
  var flat_atk = parseFloat(document.getElementById("flat_attack").value);
  var crit_rate = parseFloat(document.getElementById("crit_rate").value)/100;
  var crit_dmg = parseFloat(document.getElementById("crit_damage").value)/100;
  var physical = parseFloat(document.getElementById("physical").value)/100;
  var elemental = parseFloat(document.getElementById("elemental").value)/100;
  var pdmg_percent = parseFloat(document.getElementById("physical_percent").value)/100;
  var pdmg_flat = parseFloat(document.getElementById("physical_flat").value);
  var edmg_percent = parseFloat(document.getElementById("elemental_percent").value)/100;
  var edmg_flat = parseFloat(document.getElementById("elemental_flat").value);

  //calculate damage using stats
  var [stat, pd, ed, td, pdc, edc, tdc, pda, eda, tda] = damage_calc(base_atk, percent_atk, flat_atk, crit_rate, crit_dmg, physical, elemental, pdmg_percent, pdmg_flat, edmg_percent, edmg_flat);

  //output damage calculations
  //display(dmg, dmg_crit, dmg_avg, 0, 0, 0, "dmg", "dmg_crit", "dmg_avg", false);
  display(stat, pd, ed, td, pdc, edc, tdc, pda, eda, tda);
}

//additional stat damage function
function additional_damage(ba, pa, fa, cr, cd, pp, pe, set){
  //get stats from text fields
  var base_atk = parseFloat(document.getElementById("base_attack").value);
  var percent_atk = parseFloat(document.getElementById("percent_attack").value)/100;
  var flat_atk = parseFloat(document.getElementById("flat_attack").value);
  var crit_rate = parseFloat(document.getElementById("crit_rate").value)/100;
  var crit_dmg = parseFloat(document.getElementById("crit_damage").value)/100;
  var physical = parseFloat(document.getElementById("physical").value)/100;
  var elemental = parseFloat(document.getElementById("elemental").value)/100;

  var pdmg_percent = parseFloat(document.getElementById("physical_percent").value)/100;
  var pdmg_flat = parseFloat(document.getElementById("physical_flat").value);
  var edmg_percent = parseFloat(document.getElementById("elemental_percent").value)/100;
  var edmg_flat = parseFloat(document.getElementById("elemental_flat").value);

  var base_atk_a = parseFloat(document.getElementById(ba).value);
  var percent_atk_a = parseFloat(document.getElementById(pa).value)/100;
  var flat_atk_a = parseFloat(document.getElementById(fa).value);
  var crit_rate_a = parseFloat(document.getElementById(cr).value)/100;
  var crit_dmg_a = parseFloat(document.getElementById(cd).value)/100;
  var physical_a = parseFloat(document.getElementById(pp).value)/100;
  var elemental_a = parseFloat(document.getElementById(pe).value)/100;

  //calculate base and additional damage using stats
  var [stat, pd, ed, td, pdc, edc, tdc, pda, eda, tda] = damage_calc(base_atk, percent_atk, flat_atk, crit_rate, crit_dmg, physical, elemental, pdmg_percent, pdmg_flat, edmg_percent, edmg_flat);
  var [stat_a, pd_a, ed_a, td_a, pdc_a, edc_a, tdc_a, pda_a, eda_a, tda_a] = damage_calc((base_atk + base_atk_a), (percent_atk + percent_atk_a), (flat_atk + flat_atk_a), (crit_rate + crit_rate_a), (crit_dmg + crit_dmg_a), (physical + physical_a), (elemental + elemental_a), pdmg_percent, pdmg_flat, edmg_percent, edmg_flat);

  //output damage calculations
  display_diff (0, stat, pd, ed, td, pdc, edc, tdc, pda, eda, tda, stat_a, pd_a, ed_a, td_a, pdc_a, edc_a, tdc_a, pda_a, eda_a, tda_a, set);
}

function damage_difference(set){
  var base_atk = parseFloat(document.getElementById("base_attack").value);
  var percent_atk = parseFloat(document.getElementById("percent_attack").value)/100;
  var flat_atk = parseFloat(document.getElementById("flat_attack").value);
  var crit_rate = parseFloat(document.getElementById("crit_rate").value)/100;
  var crit_dmg = parseFloat(document.getElementById("crit_damage").value)/100;
  var physical = parseFloat(document.getElementById("physical").value)/100;
  var elemental = parseFloat(document.getElementById("elemental").value)/100;

  var base_atk1 = parseFloat(document.getElementById("ba_1").value);
  var percent_atk1 = parseFloat(document.getElementById("pa_1").value)/100;
  var flat_atk1 = parseFloat(document.getElementById("fa_1").value);
  var crit_rate1 = parseFloat(document.getElementById("cr_1").value)/100;
  var crit_dmg1 = parseFloat(document.getElementById("cd_1").value)/100;
  var physical1 = parseFloat(document.getElementById("pp_1").value)/100;
  var elemental1 = parseFloat(document.getElementById("ep_1").value)/100;

  var base_atk2 = parseFloat(document.getElementById("ba_2").value);
  var percent_atk2 = parseFloat(document.getElementById("pa_2").value)/100;
  var flat_atk2 = parseFloat(document.getElementById("fa_2").value);
  var crit_rate2 = parseFloat(document.getElementById("cr_2").value)/100;
  var crit_dmg2 = parseFloat(document.getElementById("cd_2").value)/100;
  var physical2 = parseFloat(document.getElementById("pp_2").value)/100;
  var elemental2 = parseFloat(document.getElementById("ep_2").value)/100;

  var pdmg_percent = parseFloat(document.getElementById("physical_percent").value)/100;
  var pdmg_flat = parseFloat(document.getElementById("physical_flat").value);
  var edmg_percent = parseFloat(document.getElementById("elemental_percent").value)/100;
  var edmg_flat = parseFloat(document.getElementById("elemental_flat").value);

  var [stat, pd, ed, td, pdc, edc, tdc, pda, eda, tda] = damage_calc(base_atk, percent_atk, flat_atk, crit_rate, crit_dmg, physical, elemental, pdmg_percent, pdmg_flat, edmg_percent, edmg_flat);
  var [stat1, pd1, ed1, td1, pdc1, edc1, tdc1, pda1, eda1, tda1] = damage_calc((base_atk + base_atk1), (percent_atk + percent_atk1), (flat_atk + flat_atk1), (crit_rate + crit_rate1), (crit_dmg + crit_dmg1), (physical + physical1), (elemental + elemental1), pdmg_percent, pdmg_flat, edmg_percent, edmg_flat);
  var [stat2, pd2, ed2, td2, pdc2, edc2, tdc2, pda2, eda2, tda2] = damage_calc((base_atk + base_atk2), (percent_atk + percent_atk2), (flat_atk + flat_atk2), (crit_rate + crit_rate2), (crit_dmg + crit_dmg2), (physical + physical2), (elemental + elemental2), pdmg_percent, pdmg_flat, edmg_percent, edmg_flat);

  display_diff (stat, stat1, pd1, ed1, td1, pdc1, edc1, tdc1, pda1, eda1, tda1, stat2, pd2, ed2, td2, pdc2, edc2, tdc2, pda2, eda2, tda2, set);
}

//damage calculation function
function damage_calc(base_atk_t, percent_atk_t, flat_atk_t, crit_rate_t, crit_dmg_t, phys_mod, ele_mod, phys_percent, phys_flat, ele_percent, ele_flat){ 
  
  var character_level = parseFloat(document.getElementById("character_level").value);
  var enemy_level = parseFloat(document.getElementById("enemy_level").value);
  var physical_resistance = parseFloat(document.getElementById("phys_res").value)/100;
  var elemental_resistance = parseFloat(document.getElementById("ele_res").value)/100;  

  var ignore_dr = document.getElementById("ignore_reduction").checked;

  dr = (character_level + 100) / (character_level + enemy_level + 200);

  if(ignore_dr){
    dr = 1;
    physical_resistance = 0;
    elemental_resistance = 0;
  }
  //console.log(dr);

  physical_dr = dr / (1 - physical_resistance);
  elemental_dr = dr / (1 - elemental_resistance);


  
  dmg = base_atk_t * (1 + percent_atk_t) + flat_atk_t;

  phys_dmg = ((phys_mod + 1) * (dmg * phys_percent) + phys_flat) / physical_dr;
  ele_dmg = ((ele_mod + 1) * (dmg * ele_percent) + ele_flat) / elemental_dr;
  total_dmg = phys_dmg + ele_dmg;

  phys_dmg_crit = phys_dmg * (1 + crit_dmg_t);
  ele_dmg_crit = ele_dmg * (1 + crit_dmg_t);
  total_dmg_crit = total_dmg * (1 + crit_dmg_t);

  phys_dmg_avg =(phys_dmg_crit * (crit_rate_t)) + (phys_dmg * (1 - crit_rate_t));
  ele_dmg_avg =(ele_dmg_crit * (crit_rate_t)) + (ele_dmg * (1 - crit_rate_t));
  total_dmg_avg =(total_dmg_crit * (crit_rate_t)) + (total_dmg * (1 - crit_rate_t));

  //console.log(dmg+", "+phys_dmg+", "+ele_dmg+", "+total_dmg+", "+phys_dmg_crit+", "+ele_dmg_crit+", "+total_dmg_crit+", "+phys_dmg_avg+", "+ele_dmg_avg+", "+total_dmg_avg)

  return [dmg, phys_dmg, ele_dmg, total_dmg, phys_dmg_crit, ele_dmg_crit, total_dmg_crit, phys_dmg_avg, ele_dmg_avg, total_dmg_avg];
}

//damage display function
function display(stat, phys_dmg, ele_dmg, total_dmg, phys_dmg_crit, ele_dmg_crit, total_dmg_crit, phys_dmg_avg, ele_dmg_avg, total_dmg_avg){
  document.getElementById("dmg0").innerText = Math.round(stat);
  document.getElementById("dmg1").innerText = Math.round(phys_dmg);
  document.getElementById("dmg2").innerText = Math.round(ele_dmg);
  document.getElementById("dmg3").innerText = Math.round(total_dmg);
  document.getElementById("dmg4").innerText = Math.round(phys_dmg_crit);
  document.getElementById("dmg5").innerText = Math.round(ele_dmg_crit);
  document.getElementById("dmg6").innerText = Math.round(total_dmg_crit);
  document.getElementById("dmg7").innerText = Math.round(phys_dmg_avg);
  document.getElementById("dmg8").innerText = Math.round(ele_dmg_avg);
  document.getElementById("dmg9").innerText = Math.round(total_dmg_avg);

  document.getElementById("dmg11").innerText = Math.round(phys_dmg*10000/stat)/100;
  document.getElementById("dmg12").innerText = Math.round(ele_dmg*10000/stat)/100;
  document.getElementById("dmg13").innerText = Math.round(total_dmg*10000/stat)/100;
  document.getElementById("dmg14").innerText = Math.round(phys_dmg_crit*10000/stat)/100;
  document.getElementById("dmg15").innerText = Math.round(ele_dmg_crit*10000/stat)/100;
  document.getElementById("dmg16").innerText = Math.round(total_dmg_crit*10000/stat)/100;
  document.getElementById("dmg17").innerText = Math.round(phys_dmg_avg*10000/stat)/100;
  document.getElementById("dmg18").innerText = Math.round(ele_dmg_avg*10000/stat)/100;
  document.getElementById("dmg19").innerText = Math.round(total_dmg_avg*10000/stat)/100;
}

function display_diff(stat0, stat1, pd1, ed1, td1, pdc1, edc1, tdc1, pda1, eda1, tda1, stat2, pd2, ed2, td2, pdc2, edc2, tdc2, pda2, eda2, tda2, set){
  
  switch(set){
    case 1:
      document.getElementById("ts0").innerText = Math.round(stat1);
      document.getElementById("ts1").innerText = Math.round(stat2);
      document.getElementById("as1").innerText = Math.round(stat2 - stat1);

      document.getElementById("dmg21").innerText = Math.round(pd2);
      document.getElementById("dmg23").innerText = Math.round(pdc2);
      document.getElementById("dmg25").innerText = Math.round(pda2);
      document.getElementById("dmg27").innerText = Math.round(ed2);
      document.getElementById("dmg29").innerText = Math.round(edc2);
      document.getElementById("dmg31").innerText = Math.round(eda2);
      document.getElementById("dmg33").innerText = Math.round(td2);
      document.getElementById("dmg35").innerText = Math.round(tdc2);
      document.getElementById("dmg37").innerText = Math.round(tda2);

      document.getElementById("dmg39").innerText = Math.round(pd2 - pd1);
      document.getElementById("dmg41").innerText = Math.round(pdc2 - pdc1);
      document.getElementById("dmg43").innerText = Math.round(pda2 - pda1);
      document.getElementById("dmg45").innerText = Math.round(ed2 - ed1);
      document.getElementById("dmg47").innerText = Math.round(edc2 - edc1);
      document.getElementById("dmg49").innerText = Math.round(eda2 - eda1);
      document.getElementById("dmg51").innerText = Math.round(td2 - td1);
      document.getElementById("dmg53").innerText = Math.round(tdc2 - tdc1);
      document.getElementById("dmg55").innerText = Math.round(tda2 - tda1);

      document.getElementById("dmg22").innerText = Math.round(pd2*10000/stat1)/100;
      document.getElementById("dmg24").innerText = Math.round(pdc2*10000/stat1)/100;
      document.getElementById("dmg26").innerText = Math.round(pda2*10000/stat1)/100;
      document.getElementById("dmg28").innerText = Math.round(ed2*10000/stat1)/100;
      document.getElementById("dmg30").innerText = Math.round(edc2*10000/stat1)/100;
      document.getElementById("dmg32").innerText = Math.round(eda2*10000/stat1)/100;
      document.getElementById("dmg34").innerText = Math.round(td2*10000/stat1)/100;
      document.getElementById("dmg36").innerText = Math.round(tdc2*10000/stat1)/100;
      document.getElementById("dmg38").innerText = Math.round(tda2*10000/stat1)/100;

      document.getElementById("dmg40").innerText = Math.round((pd2 - pd1)*10000/stat1)/100
      document.getElementById("dmg42").innerText = Math.round((pdc2 - pdc1)*10000/stat1)/100;
      document.getElementById("dmg44").innerText = Math.round((pda2 - pda1)*10000/stat1)/100;
      document.getElementById("dmg46").innerText = Math.round((ed2 - ed1)*10000/stat1)/100;
      document.getElementById("dmg48").innerText = Math.round((edc2 - edc1)*10000/stat1)/100;
      document.getElementById("dmg50").innerText = Math.round((eda2 - eda1)*10000/stat1)/100;
      document.getElementById("dmg52").innerText = Math.round((td2 - td1)*10000/stat1)/100;
      document.getElementById("dmg54").innerText = Math.round((tdc2 - tdc1)*10000/stat1)/100;
      document.getElementById("dmg56").innerText = Math.round((tda2 - tda1)*10000/stat1)/100;

      document.getElementById("head1").removeAttribute("style");
      document.getElementById("head2").removeAttribute("style");
      document.getElementById("ts1").setAttribute("style", "width: 50%;");

      document.getElementById("row20").removeAttribute("style");
      document.getElementById("row21").removeAttribute("style");
      document.getElementById("row22").removeAttribute("style");
      document.getElementById("row23").style.display = "none";
      document.getElementById("row24").style.display = "none";
      document.getElementById("row25").style.display = "none";
      document.getElementById("row1").removeAttribute("style");
      document.getElementById("row2").removeAttribute("style");
      document.getElementById("row3").removeAttribute("style");
      document.getElementById("row4").removeAttribute("style");
      document.getElementById("row5").removeAttribute("style");
      document.getElementById("row6").removeAttribute("style");
      document.getElementById("row7").style.display = "none";
      document.getElementById("row8").style.display = "none";
      document.getElementById("row9").style.display = "none";
      document.getElementById("row10").style.display = "none";
      document.getElementById("row11").style.display = "none";
      document.getElementById("row12").style.display = "none";
      document.getElementById("row13").style.display = "none";
      document.getElementById("row14").style.display = "none";
      document.getElementById("row15").style.display = "none";

      document.getElementById("set_comparison").innerText = "";

      break;
    case 2:
      document.getElementById("ts0").innerText = Math.round(stat1);
      document.getElementById("ts2").innerText = Math.round(stat2);
      document.getElementById("as2").innerText = Math.round(stat2 - stat1);
      
      document.getElementById("dmg57").innerText = Math.round(pd2);
      document.getElementById("dmg59").innerText = Math.round(pdc2);
      document.getElementById("dmg61").innerText = Math.round(pda2);
      document.getElementById("dmg63").innerText = Math.round(ed2);
      document.getElementById("dmg65").innerText = Math.round(edc2);
      document.getElementById("dmg67").innerText = Math.round(eda2);
      document.getElementById("dmg69").innerText = Math.round(td2);
      document.getElementById("dmg71").innerText = Math.round(tdc2);
      document.getElementById("dmg73").innerText = Math.round(tda2);

      document.getElementById("dmg75").innerText = Math.round(pd2 - pd1);
      document.getElementById("dmg77").innerText = Math.round(pdc2 - pdc1);
      document.getElementById("dmg79").innerText = Math.round(pda2 - pda1);
      document.getElementById("dmg81").innerText = Math.round(ed2 - ed1);
      document.getElementById("dmg83").innerText = Math.round(edc2 - edc1);
      document.getElementById("dmg85").innerText = Math.round(eda2 - eda1);
      document.getElementById("dmg87").innerText = Math.round(td2 - td1);
      document.getElementById("dmg89").innerText = Math.round(tdc2 - tdc1);
      document.getElementById("dmg91").innerText = Math.round(tda2 - tda1);

      document.getElementById("dmg58").innerText = Math.round(pd2*10000/stat1)/100;
      document.getElementById("dmg60").innerText = Math.round(pdc2*10000/stat1)/100;
      document.getElementById("dmg62").innerText = Math.round(pda2*10000/stat1)/100;
      document.getElementById("dmg64").innerText = Math.round(ed2*10000/stat1)/100;
      document.getElementById("dmg66").innerText = Math.round(edc2*10000/stat1)/100;
      document.getElementById("dmg68").innerText = Math.round(eda2*10000/stat1)/100;
      document.getElementById("dmg70").innerText = Math.round(td2*10000/stat1)/100;
      document.getElementById("dmg72").innerText = Math.round(tdc2*10000/stat1)/100;
      document.getElementById("dmg74").innerText = Math.round(tda2*10000/stat1)/100;

      document.getElementById("dmg76").innerText = Math.round((pd2 - pd1)*10000/stat1)/100
      document.getElementById("dmg78").innerText = Math.round((pdc2 - pdc1)*10000/stat1)/100;
      document.getElementById("dmg80").innerText = Math.round((pda2 - pda1)*10000/stat1)/100;
      document.getElementById("dmg82").innerText = Math.round((ed2 - ed1)*10000/stat1)/100;
      document.getElementById("dmg84").innerText = Math.round((edc2 - edc1)*10000/stat1)/100;
      document.getElementById("dmg86").innerText = Math.round((eda2 - eda1)*10000/stat1)/100;
      document.getElementById("dmg88").innerText = Math.round((td2 - td1)*10000/stat1)/100;
      document.getElementById("dmg90").innerText = Math.round((tdc2 - tdc1)*10000/stat1)/100;
      document.getElementById("dmg92").innerText = Math.round((tda2 - tda1)*10000/stat1)/100;

      document.getElementById("head1").removeAttribute("style");
      document.getElementById("head2").removeAttribute("style");
      document.getElementById("ts2").setAttribute("style", "width: 50%;");


      document.getElementById("row20").removeAttribute("style");
      document.getElementById("row21").style.display = "none";
      document.getElementById("row22").style.display = "none";
      document.getElementById("row23").removeAttribute("style");
      document.getElementById("row24").removeAttribute("style");
      document.getElementById("row25").style.display = "none";
      document.getElementById("row1").style.display = "none";
      document.getElementById("row2").style.display = "none";
      document.getElementById("row3").style.display = "none";
      document.getElementById("row4").style.display = "none";
      document.getElementById("row5").style.display = "none";
      document.getElementById("row6").style.display = "none";
      document.getElementById("row7").removeAttribute("style");
      document.getElementById("row8").removeAttribute("style");
      document.getElementById("row9").removeAttribute("style");
      document.getElementById("row10").removeAttribute("style");
      document.getElementById("row11").removeAttribute("style");
      document.getElementById("row12").removeAttribute("style");
      document.getElementById("row13").style.display = "none";
      document.getElementById("row14").style.display = "none";
      document.getElementById("row15").style.display = "none";

      document.getElementById("set_comparison").innerText = "";

      break;
    case 3:
      document.getElementById("ts0").innerText = Math.round(stat0);
      document.getElementById("ts1").innerText = Math.round(stat1);
      document.getElementById("ts2").innerText = Math.round(stat2);
      document.getElementById("ds").innerText = Math.round(stat2 - stat1);

      document.getElementById("dmg21").innerText = Math.round(pd1);
      document.getElementById("dmg23").innerText = Math.round(pdc1);
      document.getElementById("dmg25").innerText = Math.round(pda1);
      document.getElementById("dmg27").innerText = Math.round(ed1);
      document.getElementById("dmg29").innerText = Math.round(edc1);
      document.getElementById("dmg31").innerText = Math.round(eda1);
      document.getElementById("dmg33").innerText = Math.round(td1);
      document.getElementById("dmg35").innerText = Math.round(tdc1);
      document.getElementById("dmg37").innerText = Math.round(tda1);

      document.getElementById("dmg57").innerText = Math.round(pd2);
      document.getElementById("dmg59").innerText = Math.round(pdc2);
      document.getElementById("dmg61").innerText = Math.round(pda2);
      document.getElementById("dmg63").innerText = Math.round(ed2);
      document.getElementById("dmg65").innerText = Math.round(edc2);
      document.getElementById("dmg67").innerText = Math.round(eda2);
      document.getElementById("dmg69").innerText = Math.round(td2);
      document.getElementById("dmg71").innerText = Math.round(tdc2);
      document.getElementById("dmg73").innerText = Math.round(tda2);

      document.getElementById("dmg93").innerText = Math.round(pd2 - pd1);
      document.getElementById("dmg95").innerText = Math.round(pdc2 - pdc1);
      document.getElementById("dmg97").innerText = Math.round(pda2 - pda1);
      document.getElementById("dmg99").innerText = Math.round(ed2 - ed1);
      document.getElementById("dmg101").innerText = Math.round(edc2 - edc1);
      document.getElementById("dmg103").innerText = Math.round(eda2 - eda1);
      document.getElementById("dmg105").innerText = Math.round(td2 - td1);
      document.getElementById("dmg107").innerText = Math.round(tdc2 - tdc1);
      document.getElementById("dmg109").innerText = Math.round(tda2 - tda1);

      document.getElementById("dmg22").innerText = Math.round(pd1*10000/stat0)/100;
      document.getElementById("dmg24").innerText = Math.round(pdc1*10000/stat0)/100;
      document.getElementById("dmg26").innerText = Math.round(pda1*10000/stat0)/100;
      document.getElementById("dmg28").innerText = Math.round(ed1*10000/stat0)/100;
      document.getElementById("dmg30").innerText = Math.round(edc1*10000/stat0)/100;
      document.getElementById("dmg32").innerText = Math.round(eda1*10000/stat0)/100;
      document.getElementById("dmg34").innerText = Math.round(td1*10000/stat0)/100;
      document.getElementById("dmg36").innerText = Math.round(tdc1*10000/stat0)/100;
      document.getElementById("dmg38").innerText = Math.round(tda1*10000/stat0)/100;

      document.getElementById("dmg58").innerText = Math.round(pd2*10000/stat0)/100;
      document.getElementById("dmg60").innerText = Math.round(pdc2*10000/stat0)/100;
      document.getElementById("dmg62").innerText = Math.round(pda2*10000/stat0)/100;
      document.getElementById("dmg64").innerText = Math.round(ed2*10000/stat0)/100;
      document.getElementById("dmg66").innerText = Math.round(edc2*10000/stat0)/100;
      document.getElementById("dmg68").innerText = Math.round(eda2*10000/stat0)/100;
      document.getElementById("dmg70").innerText = Math.round(td2*10000/stat0)/100;
      document.getElementById("dmg72").innerText = Math.round(tdc2*10000/stat0)/100;
      document.getElementById("dmg74").innerText = Math.round(tda2*10000/stat0)/100;

      document.getElementById("dmg94").innerText = Math.round((pd2-pd1)*10000/stat0)/100;
      document.getElementById("dmg96").innerText = Math.round((pdc2-pdc1)*10000/stat0)/100;
      document.getElementById("dmg98").innerText = Math.round((pda2-pda1)*10000/stat0)/100;
      document.getElementById("dmg100").innerText = Math.round((ed2-ed1)*10000/stat0)/100;
      document.getElementById("dmg102").innerText = Math.round((edc2-edc1)*10000/stat0)/100;
      document.getElementById("dmg104").innerText = Math.round((eda2-eda1)*10000/stat0)/100;
      document.getElementById("dmg106").innerText = Math.round((td2-td1)*10000/stat0)/100;
      document.getElementById("dmg108").innerText = Math.round((tdc2-tdc1)*10000/stat0)/100;
      document.getElementById("dmg110").innerText = Math.round((tda2-tda1)*10000/stat0)/100;



      document.getElementById("head1").removeAttribute("style");
      document.getElementById("head2").removeAttribute("style");
      document.getElementById("ts1").setAttribute("style", "width: 50%;");
      document.getElementById("ts2").setAttribute("style", "width: 50%;");

      document.getElementById("row20").removeAttribute("style");
      document.getElementById("row21").removeAttribute("style");
      document.getElementById("row22").style.display = "none";
      document.getElementById("row23").removeAttribute("style");
      document.getElementById("row24").style.display = "none";
      document.getElementById("row25").removeAttribute("style");
      document.getElementById("row1").removeAttribute("style");
      document.getElementById("row2").removeAttribute("style");
      document.getElementById("row3").removeAttribute("style");
      document.getElementById("row4").style.display = "none";
      document.getElementById("row5").style.display = "none";
      document.getElementById("row6").style.display = "none";
      document.getElementById("row7").removeAttribute("style");
      document.getElementById("row8").removeAttribute("style");
      document.getElementById("row9").removeAttribute("style");
      document.getElementById("row10").style.display = "none";
      document.getElementById("row11").style.display = "none";
      document.getElementById("row12").style.display = "none";
      document.getElementById("row13").removeAttribute("style");
      document.getElementById("row14").removeAttribute("style");
      document.getElementById("row15").removeAttribute("style");

      if ((tda2 - tda1) > 0){
        document.getElementById("set_comparison").innerText = "Set 2 gives more damage than Set 1";
      }
      else if ((tda2 - tda1) < 0){
        document.getElementById("set_comparison").innerText = "Set 1 gives more damage than Set 2";
      }
      else if ((tda2 - tda1) == 0){
        document.getElementById("set_comparison").innerText = "Set 1 and Set 2 give the same damage";
      }
      else{
        document.getElementById("set_comparison").innerText = "Unexpected Error";
      }


      break;
  }

  document.getElementById("row1").style.backgroundColor = "lightgreen";
  document.getElementById("row2").style.backgroundColor = "lightpink";
  document.getElementById("row3").style.backgroundColor = "lightgray";
  document.getElementById("row4").style.backgroundColor = "lightgreen";
  document.getElementById("row5").style.backgroundColor = "lightpink";
  document.getElementById("row6").style.backgroundColor = "lightgray";
  document.getElementById("row7").style.backgroundColor = "lightgreen";
  document.getElementById("row8").style.backgroundColor = "lightpink";
  document.getElementById("row9").style.backgroundColor = "lightgray";
  document.getElementById("row10").style.backgroundColor = "lightgreen";
  document.getElementById("row11").style.backgroundColor = "lightpink";
  document.getElementById("row12").style.backgroundColor = "lightgray";
  document.getElementById("row13").style.backgroundColor = "lightgreen";
  document.getElementById("row14").style.backgroundColor = "lightpink";
  document.getElementById("row15").style.backgroundColor = "lightgray";

}

// //show/hide additional damage section
// function show_addition(){
//   var check = document.getElementById("showaddition");
//   if (check.style.display == "none"){
//     document.getElementById("showaddition").style.display = "block";
//   }
//   else{
//     document.getElementById("showaddition").style.display = "none";
//    }

// }

function show_object(obj, a1, a2, a3, a4, a5, a6, a7){
  //document.getElementById(check).checked = !document.getElementById(check).checked;
  //document.getElementById(obj).disabled = !document.getElementById(obj).disabled;
  var check = document.getElementById(obj);
  if (check.style.backgroundColor == "lightgray"){
    //document.getElementById(obj).style.display = "block";
    document.getElementById(obj).style.backgroundColor = "white";
    document.getElementById(a1).removeAttribute("disabled");
    document.getElementById(a2).removeAttribute("disabled");
    document.getElementById(a3).removeAttribute("disabled");
    document.getElementById(a4).removeAttribute("disabled");
    document.getElementById(a5).removeAttribute("disabled");
    document.getElementById(a6).removeAttribute("disabled");
    document.getElementById(a7).removeAttribute("disabled");
  }
  else{
    //document.getElementById(obj).style.display = "none";
    document.getElementById(obj).style.backgroundColor = "lightgray";
    document.getElementById(a1).setAttribute("disabled", true);
    document.getElementById(a2).setAttribute("disabled", true);
    document.getElementById(a3).setAttribute("disabled", true);
    document.getElementById(a4).setAttribute("disabled", true);
    document.getElementById(a5).setAttribute("disabled", true);
    document.getElementById(a6).setAttribute("disabled", true);
    document.getElementById(a7).setAttribute("disabled", true);
  }
}



function toggleItems() {
  $('.dropdown-menu').toggleClass('open');
}

$('.dropdown-menu li').click(function() {
  var text = $(this).text(); // get text of the clicked item
  $(".dropdown-toggle").text(text); // set text text to the button (dropdown)
});

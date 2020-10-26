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
function additional_damage(){
  //get stats from text fields
  var base_atk = parseFloat(document.getElementById("base_attack").value);
  var percent_atk = parseFloat(document.getElementById("percent_attack").value)/100;
  var flat_atk = parseFloat(document.getElementById("flat_attack").value);
  var crit_rate = parseFloat(document.getElementById("crit_rate").value)/100;
  var crit_dmg = parseFloat(document.getElementById("crit_damage").value)/100;

  var base_atk_a = parseFloat(document.getElementById("base_attack_a").value);
  var percent_atk_a = parseFloat(document.getElementById("percent_attack_a").value)/100;
  var flat_atk_a = parseFloat(document.getElementById("flat_attack_a").value);
  var crit_rate_a = parseFloat(document.getElementById("crit_rate_a").value)/100;
  var crit_dmg_a = parseFloat(document.getElementById("crit_damage_a").value)/100;

  //calculate base and additional damage using stats
  var [dmg, dmg_crit, dmg_avg] = damage_calc(base_atk, percent_atk, flat_atk, crit_rate, crit_dmg);
  var [dmg_t, dmg_crit_t, dmg_avg_t] = damage_calc((base_atk + base_atk_a), (percent_atk + percent_atk_a), (flat_atk + flat_atk_a), (crit_rate + crit_rate_a), (crit_dmg + crit_dmg_a))

  //calculate damage differential
  dmg_diff = dmg_t - dmg;
  dmg_crit_diff = dmg_crit_t - dmg_crit;
  dmg_avg_diff = dmg_avg_t - dmg_avg;

  //output damage calculations
  display (dmg_t, dmg_crit_t, dmg_avg_t, dmg_diff, dmg_crit_diff, dmg_avg_diff, "dmg_t", "dmg_crit_t", "dmg_avg_t", true);
}

//damage calculation function
function damage_calc(base_atk_t, percent_atk_t, flat_atk_t, crit_rate_t, crit_dmg_t, phys_mod, ele_mod, phys_percent, phys_flat, ele_percent, ele_flat){ 
  dmg = base_atk_t * (1 + percent_atk_t) + flat_atk_t;

  phys_dmg = (phys_mod + 1) * (dmg * phys_percent) + phys_flat;
  ele_dmg = (ele_mod + 1) * (dmg * ele_percent) + ele_flat;
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

  //display differential damage
  // if (diff){
  // document.getElementById("dmg_diff").innerText = "You are getting "+Math.round(diff1)+" additional Attack Damage";
  // document.getElementById("dmg_crit_diff").innerText = "You are getting "+Math.round(diff2)+" additional Crit Damage";
  // document.getElementById("dmg_avg_diff").innerText = "You are getting "+Math.round(diff3)+" additional Average Damage";
  // }
}

//show/hide additional damage section
function show_addition(){
  var check = document.getElementById("showaddition");
  if (check.style.display == "none"){
    document.getElementById("showaddition").style.display = "block";
  }
  else{
    document.getElementById("showaddition").style.display = "none";
   }

}




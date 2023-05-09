import{a as v,r as u,u as x,o as f,f as m,b,d as h,e,w as l,v as a,g as d,j as y}from"./index-6b9654e3.js";import{u as w,s as V,d as q}from"./firebaseConfig-bb59ec2d.js";import{S as U}from"./sweetalert2.all-b80a5553.js";const k={class:"grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6"},D=e("div",{class:"flex justify-between items-center"},[e("span",{class:"text-[32px] font-medium"},"สร้างแจ้งข่าวสาร")],-1),B={class:"grid grid-cols-1 gap-4 mt-4"},j={class:"p-6 shadow grid grid-cols-12"},C={class:"grid grid-cols-12 items-center gap-4"},S=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"ชื่อบริษัท :",-1),A={class:"grid grid-cols-12 items-center gap-4"},E=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"คำบรรยาย :",-1),I={class:"grid grid-cols-12 items-center gap-4"},M=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"ระยะเวลาฝึกงาน :",-1),N={class:"col-span-12 lg:col-span-2 flex items-center gap-4"},P=e("span",null,"-",-1),R={class:"grid grid-cols-12 items-center gap-4"},T=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"ตำแหน่ง :",-1),z=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"ตำแหน่ง (2):",-1),F=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"ตำแหน่ง (3):",-1),G={class:"grid grid-cols-12 gap-4"},H=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"รายละเอียด :",-1),J={class:"grid grid-cols-12 items-center gap-4"},K=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"ช่องทางติดต่อบริษัท :",-1),L={class:"flex justify-center gap-4 mt-6"},O=e("button",{type:"button",class:"w-[132px] h-[46px] rounded bg-[#ACB0B8] text-white"},"Cancle",-1),Q=e("button",{type:"submit",class:"w-[132px] h-[46px] rounded bg-[#3694ED] text-white"},"Save",-1),$={__name:"Create",setup(W){const r=v(),i=u(new Date),s=u({company_name:"",description:"",start_date:"",end_date:"",role1:"",role2:"",role3:"",job_description:"",company_contact:""}),c=x();f(()=>{const n=r.getters.getAuth.username,t=r.getters.getAuth.role;n&&t==="admin"||c.push({name:"Index"})});const _=async n=>{n.preventDefault();const t=await w(V(q,"news"),s.value);console.log("Document written with ID:",t.id),U.fire({title:"บันทึกข้อมูลสำเร็จ",text:"ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว",icon:"success",confirmButtonText:"ตกลง",confirmButtonColor:"#28a745"}),c.push({name:"Admin"})};return(n,t)=>{const p=m("VueDatePicker"),g=m("router-link");return b(),h("div",k,[D,e("div",B,[e("div",j,[e("form",{onSubmit:_,class:"col-span-12 flex flex-col gap-2"},[e("div",C,[S,l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.value.company_name=o),type:"text",class:"col-span-12 lg:col-span-10 border rounded p-2",required:""},null,512),[[a,s.value.company_name]])]),e("div",A,[E,l(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.value.description=o),type:"text",class:"col-span-12 lg:col-span-10 border rounded p-2",required:""},null,512),[[a,s.value.description]])]),e("div",I,[M,d(p,{modelValue:s.value.start_date,"onUpdate:modelValue":t[2]||(t[2]=o=>s.value.start_date=o),"enable-time-picker":!1,"min-date":i.value,"auto-apply":!0,locale:"th",class:"col-span-12 lg:col-span-2",required:""},null,8,["modelValue","min-date"]),e("div",N,[P,d(p,{modelValue:s.value.end_date,"onUpdate:modelValue":t[3]||(t[3]=o=>s.value.end_date=o),"enable-time-picker":!1,"min-date":i.value,"auto-apply":!0,locale:"th",class:"col-span-12 lg:col-span-2",required:""},null,8,["modelValue","min-date"])])]),e("div",R,[T,l(e("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>s.value.role1=o),type:"text",class:"col-span-12 lg:col-span-2 border rounded p-2",required:""},null,512),[[a,s.value.role1]]),z,l(e("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>s.value.role2=o),type:"text",class:"col-span-12 lg:col-span-2 border rounded p-2",required:""},null,512),[[a,s.value.role2]]),F,l(e("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>s.value.role3=o),type:"text",class:"col-span-12 lg:col-span-2 border rounded p-2",required:""},null,512),[[a,s.value.role3]])]),e("div",G,[H,l(e("textarea",{"onUpdate:modelValue":t[7]||(t[7]=o=>s.value.job_description=o),class:"col-span-12 lg:col-span-10 border rounded p-2",rows:"6",required:""},null,512),[[a,s.value.job_description]])]),e("div",J,[K,l(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>s.value.company_contact=o),type:"text",class:"col-span-12 lg:col-span-10 border rounded p-2",required:""},null,512),[[a,s.value.company_contact]])]),e("div",L,[d(g,{to:"/admin"},{default:y(()=>[O]),_:1}),Q])],32)])])])}}};export{$ as default};

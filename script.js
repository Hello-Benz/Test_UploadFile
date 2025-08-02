let showresult = document.querySelector(".result");

function grade(){

    let midterm = Number(document.getElementById("midterm").value);
    let final = Number(document.getElementById("final").value);
    let other = Number(document.getElementById("other").value);

    let total = document.getElementById("total");
    let grade = document.getElementById("grade");
    let detail = document.getElementById("detail");

    let Allresult;

    if(!midterm || !final || !other){
        Swal.fire({
        title: "กรุณากรอกคะแนนให้ครบถ้วนก่อน",
        text: "บางข้อมูลที่คุณยังไม่กรอกคะแนน",
        icon: "warning",
        showCancelButton: false,
        showConfirmButton: false });
    }
    else if (midterm >30){
        Swal.fire({
        title: "กรุณากรอกคะแนนกลางภาคไม่เกิน 30 คะแนน",
        text: "บางข้อมูลที่คุณยังกรอกไม่ตรงตามเงื่อนไข",
        icon: "warning",
        showCancelButton: false,
        showConfirmButton: false });
    } else if (final >50){
        Swal.fire({
        title: "กรุณากรอกคะแนนปลายภาคไม่เกิน 50 คะแนน",
        text: "บางข้อมูลที่คุณยังกรอกไม่ตรงตามเงื่อนไข",
        icon: "warning",
        showCancelButton: false,
        showConfirmButton: false });
    } else if (other >20){
        Swal.fire({
        title: "กรุณากรอกคะแนนจิตพิสัยไม่เกิน 20 คะแนน",
        text: "บางข้อมูลที่คุณยังกรอกไม่ตรงตามเงื่อนไข",
        icon: "warning",
        showCancelButton: false,
        showConfirmButton: false });
    } else {
        Swal.fire({
        title: "คำนวนคะแนนสำเร็จ",
        text: "คุณสามารดูคะแนนได้ที่ช่องด้านล่าง",
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false });

        Allresult = midterm + final + other;
        showresult.setAttribute('class', 'show');

        if(Allresult > 80){
            total.innerHTML = "คะแนนรวมของคุณคือ : " + Allresult;
            grade.innerHTML = "ผลการเรียนที่ได้ : A";
            detail.innerHTML = "ผลการเรียนของคุณอยู่ในระดับที่ดีมาก ขอให้ตั้งใจเรียนต่อไปนะครับ"
        } else if (Allresult > 70){
            total.innerHTML = "คะแนนรวมของคุณคือ : " + Allresult;
            grade.innerHTML = "ผลการเรียนที่ได้ : B";
            detail.innerHTML = "ผลการเรียนของคุณอยู่ในระดับที่ดี สุดยอดมาก ๆ ครับ"
        } else if (Allresult > 60){
            total.innerHTML = "คะแนนรวมของคุณคือ : " + Allresult;
            grade.innerHTML = "ผลการเรียนที่ได้ : C";
            detail.innerHTML = "ผลการเรียนของคุณอยู่ในระดับที่ปานกลาง พยายามอีกนิดนะครับ"
        } else if (Allresult > 50){
            total.innerHTML = "คะแนนรวมของคุณคือ : " + Allresult;
            grade.innerHTML = "ผลการเรียนที่ได้ : D";
            detail.innerHTML = "ผลการเรียนของคุณอยู่ในระดับที่น้อย สู้ ๆ นะ"
        } else {
            total.innerHTML = "คะแนนรวมของคุณคือ : " + Allresult;
            grade.innerHTML = "ผลการเรียนที่ได้ : F";
            detail.innerHTML = "ผลการเรียนของคุณไม่ผ่าน พยายามเข้านะ"
        }
    }

}
function p11f()
{
    if(document.getElementById("p11").checked==true)
        {
            document.getElementById("p22").checked==true;
            document.getElementById("ch").value=1;
        }
}

function p12f()
{
    if(document.getElementById("p12").checked==true)
        {
            document.getElementById("p21").checked==true;
            document.getElementById("ch").value=0;
        }
}

function start()
{
    document.getElementById("main").className="a";
    document.getElementById("main2").className="b";
}







function b1f()
{
    ch=document.getElementById("ch").value;
    if(ch==1)
    {
        document.getElementById("b1").value="*";
        document.getElementById("b1").disabled=true;
        document.getElementById("ch").value=0;
    }
    else
    {
        document.getElementById("b1").value="o";
        document.getElementById("b1").disabled=true;
        document.getElementById("ch").value=1;
    }
    
    
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    
    if(b1==b2 && b2==b3 && b3==b1)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
                
                
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b1==b4 && b4==b7 && b7==b1)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b1==b5 && b5==b9 && b9==b1)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
}







function b2f()
{
    ch=document.getElementById("ch").value;
    if(ch==1)
    {
        document.getElementById("b2").value="*";
        document.getElementById("b2").disabled=true;
        document.getElementById("ch").value=0;
    }
    else
    {
        document.getElementById("b2").value="o";
        document.getElementById("b2").disabled=true;
        document.getElementById("ch").value=1;
    }
    
    
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    
    if(b1==b2 && b2==b3 && b3==b1)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b2==b5 && b5==b8 && b8==b2)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
}







function b3f()
{
    ch=document.getElementById("ch").value;
    if(ch==1)
    {
        document.getElementById("b3").value="*";
        document.getElementById("b3").disabled=true;
        document.getElementById("ch").value=0;
    }
    else
    {
        document.getElementById("b3").value="o";
        document.getElementById("b3").disabled=true;
        document.getElementById("ch").value=1;
    }
    
    
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    
    if(b1==b2 && b2==b3 && b3==b1)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b3==b6 && b6==b9 && b9==b3)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b3==b5 && b5==b7 && b7==b3)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
}







function b4f()
{
    ch=document.getElementById("ch").value;
    if(ch==1)
    {
        document.getElementById("b4").value="*";
        document.getElementById("b4").disabled=true;
        document.getElementById("ch").value=0;
    }
    else
    {
        document.getElementById("b4").value="o";
        document.getElementById("b4").disabled=true;
        document.getElementById("ch").value=1;
    }
    
    
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    
    if(b4==b5 && b5==b6 && b6==b4)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b1==b4 && b4==b7 && b7==b1)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
}








function b5f()
{
    ch=document.getElementById("ch").value;
    if(ch==1)
    {
        document.getElementById("b5").value="*";
        document.getElementById("b5").disabled=true;
        document.getElementById("ch").value=0;
    }
    else
    {
        document.getElementById("b5").value="o";
        document.getElementById("b5").disabled=true;
        document.getElementById("ch").value=1;
    }
    
    
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    
    if(b5==b2 && b2==b8 && b8==b5)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b5==b4 && b4==b6 && b6==b5)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b1==b5 && b5==b9 && b9==b1)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b3==b5 && b5==b7 && b7==b3)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
}








function b6f()
{
    ch=document.getElementById("ch").value;
    if(ch==1)
    {
        document.getElementById("b6").value="*";
        document.getElementById("b6").disabled=true;
        document.getElementById("ch").value=0;
    }
    else
    {
        document.getElementById("b6").value="o";
        document.getElementById("b6").disabled=true;
        document.getElementById("ch").value=1;
    }
    
    
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    
    if(b4==b5 && b5==b6 && b6==b4)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b6==b3 && b3==b9 && b9==b6)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
}








function b7f()
{
    ch=document.getElementById("ch").value;
    if(ch==1)
    {
        document.getElementById("b7").value="*";
        document.getElementById("b7").disabled=true;
        document.getElementById("ch").value=0;
    }
    else
    {
        document.getElementById("b7").value="o";
        document.getElementById("b7").disabled=true;
        document.getElementById("ch").value=1;
    }
    
    
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    
    if(b1==b4 && b4==b7 && b7==b1)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
                
                
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b7==b8 && b8==b9 && b9==b7)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b7==b5 && b5==b3 && b3==b7)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
}








function b8f()
{
    ch=document.getElementById("ch").value;
    if(ch==1)
    {
        document.getElementById("b8").value="*";
        document.getElementById("b8").disabled=true;
        document.getElementById("ch").value=0;
    }
    else
    {
        document.getElementById("b8").value="o";
        document.getElementById("b8").disabled=true;
        document.getElementById("ch").value=1;
    }
    
    
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    
    if(b7==b8 && b8==b9 && b9==b7)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b2==b5 && b5==b8 && b8==b2)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
}








function b9f()
{
    ch=document.getElementById("ch").value;
    if(ch==1)
    {
        document.getElementById("b9").value="*";
        document.getElementById("b9").disabled=true;
        document.getElementById("ch").value=0;
    }
    else
    {
        document.getElementById("b9").value="o";
        document.getElementById("b9").disabled=true;
        document.getElementById("ch").value=1;
    }
    
    
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    
    if(b9==b6 && b6==b3 && b3==b9)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
                
                
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b9==b8 && b8==b7 && b7==b9)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
    
    if(b1==b5 && b5==b9 && b9==b1)
        {
            if(document.getElementById("p11").checked==true)
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                }
            else
                {
                    if(ch==1)
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 2nd Winner";
                    }
                    else
                    {
                        document.getElementById("ans").className="d";
                        document.getElementById("ans").value="Player 1st Winner";
                    }
                }
            document.getElementById("b1").disabled=true;
            document.getElementById("b2").disabled=true;
            document.getElementById("b3").disabled=true;
            document.getElementById("b4").disabled=true;
            document.getElementById("b5").disabled=true;
            document.getElementById("b6").disabled=true;
            document.getElementById("b7").disabled=true;
            document.getElementById("b8").disabled=true;
            document.getElementById("b9").disabled=true;
        }
}

function re()
{
    window.location.reload();
}

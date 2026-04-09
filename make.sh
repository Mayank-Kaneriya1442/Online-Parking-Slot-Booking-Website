echo "Enter the Number: " read n
s=0 rev="" temp=$n

while [ $n -gt 0 ];
do
    s=$(( $n % 10 ));
    rev=$( echo ${rev}${s} ) n=$(( $n / 10 ));
done

if [ $temp -eq $rev ]
then
    echo "Number is Palidrum"
else
    echo "Number is not Palidrum"
fi
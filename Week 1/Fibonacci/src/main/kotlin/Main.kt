import kotlin.math.pow
import kotlin.math.sqrt

fun main() {
    print("Which fibonacci term would you like to show: ");
    var n: Int? = null;
    do {
        val inStr = readlnOrNull();
        try {
            n = inStr?.toInt()
        } catch (e: NumberFormatException) {
            println("Please enter a valid number.")
        }
    } while(n == null);

    println(fibonacci(n));

}

fun fibonacci(n: Int): Int {
    val phi = (1 + sqrt(5.0)) / 2;

    val nthTerm = (phi.pow(n.toDouble()) - (-phi.pow(-n.toDouble()))) / sqrt(5.0);

    return nthTerm.toInt();
}
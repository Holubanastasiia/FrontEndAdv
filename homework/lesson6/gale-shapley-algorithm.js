// Number of Men or Women
N = 4;

function wPrefersM1OverM(prefer, w, m, m1) {

    // Check if w prefers m over her current engagment m1
    for (var i = 0; i < N; i++) {

        // If m1 comes before m in list of w, then w prefers her
        // current engagement, don't do anything
        if (prefer[w][i] == m1)
            return true;

        // If m comes before m1 in w's list, then free her current
        // engagement and engage her with m
        if (prefer[w][i] == m)
            return false;
    }
}

// Prints stable matching for N boys and N girls. Boys are numbered as 0 to
// N-1. Girls are numbereed as N to 2N-1.
function stableMarriage(prefer) {

    // Stores partner of women. This is our output array that
    // stores paing information.  The value of wPartner[i]
    // indicates the partner assigned to woman N+i.  Note that
    // the woman numbers between N and 2*N-1. The value -1
    // indicates that (N+i)'th woman is free
    var wPartner = new Array(N);

    // An array to store availability of men.  If mFree[i] is
    // false, then man 'i' is free, otherwise engaged.
    mFree = new Array(N);

    // Initialize all men and women as free
    wPartner.fill(-1);
    mFree.fill(false);
    var freeCount = N;

    // While there are free men
    while (freeCount > 0) {
        // Pick the first free man (we could pick any)
        var m;
        for (m = 0; m < N; m++)
            if (mFree[m] == false)
                break;

        // One by one go to all women according to m's preferences.
        // Here m is the picked free man
        for (var i = 0; i < N && mFree[m] == false; i++) {
            var w = prefer[m][i];

            // The woman of preference is free, w and m become
            // partners (Note that the partnership maybe changed
            // later). So we can say they are engaged not married
            if (wPartner[w - N] == -1) {
                wPartner[w - N] = m;
                mFree[m] = true;
                freeCount--;
            }

            else  // If w is not free
            {

                // Find current engagement of w
                var m1 = wPartner[w - N];

                // If w prefers m over her current engagement m1,
                // then break the engagement between w and m1 and
                // engage m with w.
                if (wPrefersM1OverM(prefer, w, m, m1) == false) {
                    wPartner[w - N] = m;
                    mFree[m] = true;
                    mFree[m1] = false;
                }
            } // End of Else
        } // End of the for loop that goes to all women in m's list
    } // End of main while loop


    // Print the solution
    document.write("Woman      Man" + "<br>");
    for (var i = 0; i < N; i++)
        document.write(" " + (i + N) + "     " + wPartner[i] + "<br>");
}

var prefer = [[7, 5, 6, 4],
[5, 4, 6, 7],
[4, 5, 6, 7],
[4, 5, 6, 7],
[0, 1, 2, 3],
[0, 1, 2, 3],
[0, 1, 2, 3],
[0, 1, 2, 3],
];
stableMarriage(prefer);

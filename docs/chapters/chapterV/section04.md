<h2>V.4 Input Address Acceptance/Rejection and its Validation Significance</h2>  

The address-processing functions differ significantly among themselves with respect to which input addresses they accept and reject, and with respect to the significance of the validation of an input address implied by acceptance or rejection.  These distinctions are discussed below.  

** <u>Function 1.</u>**  Function 1 accepts an input address if and only if it falls within the <u>administrative address range</u> allocated to some blockface (described below).  Thus, Function 1’s acceptance of an input address does not by itself validate whether the input address is the actual address of a building, but only whether it falls within an administrative address range.  

The administrative address range allocated to a blockface is the set of addresses that actually are, or potentially may be, assigned to buildings on that blockface.  Administrative address ranges are allocated to blockfaces by the offices of the Borough Presidents.  In many cases, the administrative address range allocated to a blockface is broader than its current ‘actual’ address range (i.e., the range encompassed by the lowest and highest actual addresses of existing buildings on the blockface).  This reserves addresses for new buildings that might be built on that blockface in the future.  (To ‘shoehorn’ new buildings between existing buildings, it is sometimes necessary to assign house numbers with suffixes like A, B, 1/2 and 1/3.)  

In theory, an administrative address range encompasses all of the actual addresses of existing buildings on the blockface.  However, there are discrepancies from this in reality for a relatively small number of blockfaces, as well as temporary discrepancies caused by Geosupport data errors.  

An administrative address range may also encompass nonexistent addresses, either between the low and high actual addresses of the blockface or beyond them.  For example, consider the blockface on the east side of East 28 Street between Avenues I and J in Brooklyn.  The administrative address range allocated to this blockface is 901-999.  Function 1 would accept any odd address between 901 and 999 on E 28 Street in Brooklyn as input, whether or not that input address is a valid address of an existing building.  In reality, the lowest and highest actual house numbers of existing buildings on this blockface (as of the writing of this document) are 901 and 985, and within this range there are gaps in actual addresses.  For example, there are buildings on East 28 Street with the house numbers 925 and 929, but there is not currently a building with the house number 927, nor are there buildings with any of the odd house numbers from 987 through 999.  Nevertheless, all of these house numbers will result in successful Function 1 calls, since they all fall within the administrative address range.  

## <span id="chapterV.4.1"><u>Function 1E</u></span>
With the exception of a rare case discussed below, Functions 1 and 1E accept the same addresses and reject the same addresses, and the validation significance of acceptance and rejection is the same for both functions.  

The exceptional case is that of an address that is split among more than one Election District (ED).  As of this writing, there is only one instance of this case, 3333 Broadway in Manhattan;  it is split among three EDs.  Therefore, for this address, Function 1E is unable to determine an ED (or any of the higher-level political districts).  Since the primary purpose of Function 1E is to provide the political geography for an address, Function 1E rejects this address with a GRC value of ‘56’.  However, portions of this building in specific EDs can be identified using house number suffixes, ‘A’ through ‘E’:  3333A through 3333C Broadway are in ED 94 of Assembly District (AD) 70; 3333D Broadway is in ED 82 of AD 70; and 3333E Broadway is in ED 83 of AD 70.  Function 1E accepts these addresses as input, and returns the political districts specific to the input.  Functions 1 and 1A accept both the un-suffixed and suffixed addresses.  

## <span id="chapterV.4.2"><u>Function 1A</u></span>
Function 1A accepts an input address if and only if the address falls within one of the following two cases:  

* <u>Valid actual address</u>. If the input address is a valid address of an existing building on a property, there is a normal completion (Geosupport Return Code = ‘00’).  

* <u>Pseudo-address</u>. If the input address is a ‘pseudo-address’ , a warning is issued (GRC = ‘01’, Reason Code = ‘8’ or ‘9’).  Pseudo-addresses (not to be confused with pseudo-street names) are discussed in [Chapter VI.5](../../chapterVI/section05/).  

If the input address is neither a valid address of an existing building nor a pseudo-address, Function 1A  <u>rejects</u> that input address.  This is true even if the input address falls within an administrative address range allocated to a blockface and is therefore accepted by Functions 1 and 1E.  Thus, Function 1A’s criterion for accepting an input address is typically more stringent than those of Functions 1 and 1E, and the validation significance of acceptance differs accordingly.  

## <span id="chapterV.4.3"><u>Function AP</u></span>
Function AP accepts an input address if and only if the address falls within the following  case:  

* <u>Valid actual address.</u> If the input address is a valid address of an existing building on a property, there is a <u>normal completion </u>(Geosupport Return Code = ‘00’).  

Function AP’s criterion is very similar to Function 1A’s.  If the input address is not a valid address of an existing building, Function AP <u>rejects</u> that input address.  This is true even if the input address falls within an administrative address range allocated to a blockface and is therefore accepted by Functions 1 and 1E.  Thus, Function AP’s criterion for accepting an input address is typically more stringent than those of Functions 1 and 1E, and the validation significance of acceptance differs accordingly.  

## <span id="chapterV.4.4"><u>Function 1B Input Address Processing and Return Code Processing</u></span>

Function 1B makes an internal combined call to Extended Function 1A and Extended Function 1E (see descriptions of 1E and 1A above).  Extended Functions 1A and 1E return more information than the regular Functions 1A and 1E.  This is described in [Chapter V.5](../section05/)  (Output Data Returned) below.  

Function 1B invokes Function 1A Extended processing first.  If the input address number is altered by the Function 1A Extended processing (e.g. deleting a hyphen) the altered version of the address number is passed as input to the Function 1E Extended processing.  

Also, since Function 1A is more stringent than Function 1E, it is possible that the address will be rejected by the Function 1A portion of 1B and then successfully processed by the Function 1E portion of 1B.  There can be rare cases where the input address is processed successfully by the Function 1A portion and rejected by the Function 1E portion.  In Work Area 1, there are two sets of GRC, Reason Code and Message fields to accommodate the Function 1E and Function 1A processing included in Function 1B.  

The original set of GRC, Reason Code and Message fields in Work Area 1 contain the GRC, Reason Code and Message from the Function 1E Extended portion of the Function 1B call.  This second set contains the GRC, Reason Code and Message for the Function 1A Extended portion of the Function 1B call. (As described above, it is entirely possible that Geosupport will find one set of information and not find the other.  There can be an error code and message in the new GRC and Message fields indicating property data (Function 1A) has not been found, and a 00 or 01 GRC in the original Return Code field indicating  Blockface (Function 1E) information has been found, or just the opposite.)

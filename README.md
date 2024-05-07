# Chart Manager

## Purpose

This module manages chartsets for arcade rhythm games. In an arcade rhythm game, a chartset is made of:

- **Charts**  
    The specific sequence of notes a player has to hit, represented by fictional text files in this module's chartsets array. Data about each chart may include (for the purposes of this module):
    - *Notecount*  
        Total number of notes in the chart.
    - *Difficulty Name*  
        Name of the difficulty of the chart. (BASIC, ADVANCED, EXPERT, and MASTER)
    - *Difficulty Rating*  
        A numeric value representing the chart's actual difficulty.
- **Metadata**  
    The information about the chartset that pertains more to the song the charts are set to than the charts themselves, displayed in the Select Song menu. This includes:
    - *Jacket*  
        The image that accompanies the song when displayed in-game, represented by fictional image files in this module's chartsets array.
    - *Artist*  
        Name of the composer.
    - *Title*  
        Name of the song.
    - *BPM*  
        Speed of the song in Beats Per Minute.

## Usage

#### Attributes (can be freely gotten and set)
(note that the only exported variable is an array named chartsets)

`chartsets[i].jacket`    
Returns filename of the jacket for the chartset at index i. (return type: String)  

`chartsets[i].artist`  
Returns Artist value for the chartset at index i. (return type: String)  

`chartsets[i].title`  
Returns Title value for the chartset at index i. (return type: String)  

`chartsets[i].bpm`  
Returns BPM value for the chartset at index i. (return type: double)  

`getChartsetByTitle(String title)`  
Returns chartset whose title matches the argument. (return type: Object)

`chartsets[i].charts["BASIC"]` `chartsets[i].charts["ADVANCED"]` `chartsets[i].charts["EXPERT"]` `chartsets[i].charts["MASTER"]`  
Returns chart whose difficulty name matches the index, as the difficulty names are the keys. (return type: Object)

`chartsets[i].charts[x].notecount`  
Returns number of notes for the chart at key x in the chartset at index i. (return type: int)

`chartsets[i].charts[x].difficulty`  
Returns difficulty rating for the chart at key x in the chartset at index i. (return type: double)

#### Printers

`printAll()`  
Prints the data for all chartsets. (return type: void)

`printAllMeta()`  
Prints the metadata for all chartsets. (return type: void)

`printAllCharts()`  
Prints the chart data for all chartsets. (return type: void)

`printAt(int i)`  
Prints the data for the chartset at index i. (return type: void)

`printMetaAt(int i)`  
Prints the metadata for the chartset at index i. (return type: void)

`printChartsAt(int i)`  
Prints the chart data for all charts in the chartset at index i. (return type: void)

`printChartAt(int i, String difficulty)`  
Prints the data for the chart whose difficulty name matches the difficulty argument in the chartset at index i. (return type: void)

`printFromTitle(String title)`  
Prints the data for the chartset whose title matches the argument. (return type: void)

`printMetaFromTitle(String title)`  
Prints the metadata for the chartset whose title matches the argument. (return type: void)

`printChartsFromTitle(String title)`  
Prints the data for all charts in the chartset whose title matches the argument. (return type: void)

`printChartFromTitle(String title, String difficulty)`  
Prints the data for the chart whose difficulty matches the difficulty argument in the chartset whose title matches the title argument. (return type: void)
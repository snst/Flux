let workouts =
[`<workout_file>
    <author>Marinov</author>
    <name>Dijon</name>
    <category>VO2 Max</category>
    <description>60/60s or 60 sec ON at 121% of FTP followed by 60 sec OFF. In 2 groups by 8 reps each.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <Warmup Duration="120" PowerLow="0.32" PowerHigh="0.39"/>
        <SteadyState Duration="60" Power="0.39"/>
        <SteadyState Duration="60" Power="0.47"/>
        <SteadyState Duration="60" Power="0.55"/>
        <SteadyState Duration="60" Power="0.63"/>
        <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.63"/>
        <SteadyState Duration="120" Power="0.5"/>
        <IntervalsT Repeat="8" OnDuration="60" OffDuration="60" OnPower="1.21" OffPower="0.44"/>
        <SteadyState Duration="300" Power="0.40"/>
        <IntervalsT Repeat="8" OnDuration="60" OffDuration="60" OnPower="1.21" OffPower="0.44"/>
        <SteadyState Duration="300" Power="0.40"/>
        <Cooldown Duration="300" PowerLow="0.39" PowerHigh="0.32"/>
    </workout>
</workout_file>
`,
`<workout_file>
    <author>Marinov</author>
    <name>Chili Pepper</name>
    <category>VO2 Max</category>
    <description> NOTE: This is mixed mode workout with Slope targets in the main interval groups. 40/20s or 40 sec ON at 121% of FTP followed by 20 sec OFF, in 2 groups by 10 reps each.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <Warmup Duration="120" PowerLow="0.32" PowerHigh="0.39"/>
        <SteadyState Duration="60" Power="0.39" Cadence="80"/>
        <SteadyState Duration="60" Power="0.47" Cadence="90"/>
        <SteadyState Duration="60" Power="0.55" Cadence="100"/>
        <SteadyState Duration="60" Power="0.63" Cadence="90"/>
        <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.63" Cadence="100" CadenceResting="80"/>
        <SteadyState Duration="120" Power="0.5" Slope="1"/>
        <IntervalsT Repeat="10" OnDuration="40" OffDuration="20" OnPower="1.21" OffPower="0.44" OnSlope="4" OffSlope="0" Cadence="90" CadenceResting="80"/>
        <SteadyState Duration="300" Power="0.40" Slope="1"/>
        <IntervalsT Repeat="10" OnDuration="40" OffDuration="20" OnPower="1.21" OffPower="0.44" OnSlope="4" OffSlope="0"/>
        <SteadyState Duration="300" Power="0.40"/>
        <Cooldown Duration="300" PowerLow="0.39" PowerHigh="0.32" />
    </workout>
</workout_file>
`,
`<workout_file>
    <author>Marinov</author>
    <name>Chili Pepper +1</name>
    <category>VO2 Max</category>
    <description>Short but tough, this is the hardest workout ever. It\'s gonna burn!</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <Warmup Duration="120" PowerLow="0.32" PowerHigh="0.39"/>
        <SteadyState Duration="60" Power="0.39"/>
        <SteadyState Duration="60" Power="0.47"/>
        <SteadyState Duration="60" Power="0.55"/>
        <SteadyState Duration="60" Power="0.63"/>
        <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.63"/>
        <SteadyState Duration="120" Power="0.5"/>
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <FreeRide Duration="300" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="300" Power="0.39"/>
        <Cooldown Duration="300" PowerLow="0.39" PowerHigh="0.32"/>
    </workout>
</workout_file>
`,
`<workout_file>
    <author>Marinov</author>
    <name>Pasta</name>
    <category>Threshold</category>
    <description>A Classic 2 times 20 min at almost FTP. Make sure you had some pasta before this session. You will need it!</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <Warmup Duration="120" PowerLow="0.32" PowerHigh="0.39"/>
        <SteadyState Duration="60" Power="0.39"/>
        <SteadyState Duration="60" Power="0.47"/>
        <SteadyState Duration="60" Power="0.55"/>
        <SteadyState Duration="60" Power="0.63"/>
        <IntervalsT  Repeat="2" OnDuration="30" OffDuration="30" OnPower="1.06" OffPower="0.63"/>
        <SteadyState Duration="120" Power="0.5"/>
        <SteadyState Duration="1200" Power="0.98"/>
        <SteadyState Duration="600" Power="0.44"/>
        <SteadyState Duration="1200" Power="0.98"/>
        <SteadyState Duration="300" Power="0.44"/>
        <Cooldown Duration="300" PowerLow="0.44" PowerHigh="0.32"/>
    </workout>
</workout_file>`
,
`<workout_file>
    <author>Marinov</author>
    <name>Potato Chips</name>
    <category>Threshold</category>
    <description>5 by 5 min at 100% of FTP with 5 min recovery in between. Perfect to get you accustome to first intensite sessions after a base block, or just that new FTP value.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <SteadyState Duration="300" Power="0.39"/>
        <SteadyState Duration="120" Power="0.60"/>
        <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.5"/>
        <SteadyState Duration="120" Power="0.56"/>
        <IntervalsT Repeat="5" OnDuration="300" OffDuration="300" OnPower="1" OffPower="0.5"/>
        <SteadyState Duration="300" Power="0.39"/>
    </workout>
</workout_file>`
,
`<workout_file>
    <author>Marinov</author>
    <name>Maple</name>
    <category>Sweet Spot</category>
    <description>4 times 10 min Sweet Spot intervals with 5 min recovery in between and warm-up Ramp.</description>
    <sportType>bike</sportType>
    <tags>
        <tag name="sweet"/>
        <tag name="spot"/>
    </tags>
    <workout>
        <Warmup Duration="300" PowerLow="0.32" PowerHigh="0.75"/>
        <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="1.08" OffPower="0.44"/>
        <SteadyState Duration="180" Power="0.44"/>
        <IntervalsT Repeat="4" OnDuration="600" OffDuration="300" OnPower="0.92" OffPower="0.44"/>
        <Cooldown Duration="600" PowerLow="0.44" PowerHigh="0.32"/>
    </workout>
</workout_file>`
,
`<workout_file>
    <author>Marinov</author>
    <name>Honey</name>
    <category>Sweet Spot</category>
    <description>4 times 10 min Sweet Spot intervals with 5 min recovery in between.</description>
    <sportType>bike</sportType>
    <workout>
        <Warmup Duration="300" PowerLow="0.32" PowerHigh="0.75"/>
        <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="1.08" OffPower="0.44"/>
        <SteadyState Duration="180" Power="0.44"/>
        <IntervalsT Repeat="3" OnDuration="900" OffDuration="300" OnPower="0.90" OffPower="0.44"/>
        <Cooldown Duration="600" PowerLow="0.44" PowerHigh="0.32"/>
    </workout>
</workout_file>`
,
`<workout_file>
    <author>Marinov</author>
    <name>Baguette</name>
    <category>Base</category>
    <description>The bread and butter of Endurance training with efforts in Zone 1 and 2.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <Warmup Duration="600" PowerLow="0.32" PowerHigh="0.63"/>
        <SteadyState Duration="600" Power="0.63"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.71"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.71"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.71"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.63"/>
        <Cooldown Duration="600" PowerLow="0.63" PowerHigh="0.32"/>
    </workout>
</workout_file>`
,
`<workout_file>
    <author>Marinov</author>
    <name>Baguette +1</name>
    <category>Base</category>
    <description>The bread and butter of Endurance training, with efforts in Zone 2.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <SteadyState Duration="600" Power="0.39"/>
        <SteadyState Duration="600" Power="0.63"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.67"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.71"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.71"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.71"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.67"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.63"/>
        <SteadyState Duration="600" Power="0.39"/>
    </workout>
</workout_file>`
,
`<workout_file>
    <author>Marinov</author>
    <name>Butter</name>
    <category>Base</category>
    <description>The bread and butter of Endurance training, in steady Zone 2 at 67% of FTP.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <Warmup Duration="360" PowerLow="0.32" PowerHigh="0.55"/>
        <IntervalsT Repeat="2" OnDuration="60" OffDuration="60" OnPower="0.88" OffPower="0.55"/>
        <SteadyState Duration="4200" Power="0.67"/>
        <Cooldown Duration="600" PowerLow="0.67" PowerHigh="0.32"/>
    </workout>
</workout_file>`
,
`<workout_file>
    <author>Marinov</author>
    <name>Butter+1</name>
    <category>Base</category>
    <description>The bread and butter of Endurance training, in steady Zone 2 at 67% of FTP.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <Warmup Duration="360" PowerLow="0.32" PowerHigh="0.55"/>
        <IntervalsT Repeat="2" OnDuration="60" OffDuration="60" OnPower="0.88" OffPower="0.55"/>
        <SteadyState Duration="6000" Power="0.67"/>
        <Cooldown Duration="600" PowerLow="0.67" PowerHigh="0.32"/>
    </workout>
</workout_file>`
,
`<workout_file>
    <author>Marinov</author>
    <name>Blackcurrant</name>
    <category>Recovery</category>
    <description>A recovery ride in zone 1 at 50% of FTP.</description>
    <sporttype>bike</sporttype>
    <tags></tags>
    <workout>
        <Warmup Duration="600" PowerLow="0.30" PowerHigh="0.5"/>
        <SteadyState Duration="2400" Power="0.5"/>
        <Cooldown Duration="600" PowerLow="0.5" PowerHigh="0.30"/>
    </workout>
</workout_file>`,
`<workout_file>
    <author>Flux</author>
    <name>Ramp Test</name>
    <category>Ramp Test</category>
    <description>Ramp test proceeding in steps of 6% of previous FTP for 60 seconds. Do until exhoustion and take 75% of the power you did in the last interval you’ve reached. That's your new FTP.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <SteadyState Duration=" 300" Power="0.46" />
        <SteadyState Duration="60" Power="0.52" />
        <SteadyState Duration="60" Power="0.58" />
        <SteadyState Duration="60" Power="0.64" />
        <SteadyState Duration="60" Power="0.70" />
        <SteadyState Duration="60" Power="0.76" />
        <SteadyState Duration="60" Power="0.82" />
        <SteadyState Duration="60" Power="0.88" />
        <SteadyState Duration="60" Power="0.94" />
        <SteadyState Duration="60" Power="1.0" />
        <SteadyState Duration="60" Power="1.06" />
        <SteadyState Duration="60" Power="1.12" />
        <SteadyState Duration="60" Power="1.18" />
        <SteadyState Duration="60" Power="1.24" />
        <SteadyState Duration="60" Power="1.3" />
        <SteadyState Duration="60" Power="1.36" />
        <SteadyState Duration="60" Power="1.42" />
        <SteadyState Duration="60" Power="1.48" />
        <SteadyState Duration="60" Power="1.54" />
        <SteadyState Duration="60" Power="1.6" />
        <SteadyState Duration="60" Power="1.66" />
        <SteadyState Duration="60" Power="1.72" />
        <SteadyState Duration="60" Power="1.78" />
        <SteadyState Duration="60" Power="1.84" />
        <SteadyState Duration="60" Power="1.9" />
        <SteadyState Duration="60" Power="1.96" />
        <SteadyState Duration="60" Power="2.02" />
    </workout>
</workout_file>`,

`<workout_file>
 <author>N.N.</author>
 <name>BMU #1 Halvfems</name>
 <description>Build Me Up: Week 0 Prep:  Halvfems
Named after the number 90 in Danish, this workout is focused sweet spot training, centered around 90% of FTP. This pairs with Devedeset (90 in Croatian) and Novanta (90 in Italian) to make up the sweet spot trifecta in this plan. The workouts are alphabetically ordered from easiest to hardest, so enjoy the middle of these three challenging workouts today...
Stress points: 68
Z1: 22m
Z2: 2m
Z3: -
Z4: 37m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="420" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="720" Power="0.9" Cadence="90"/>
  <SteadyState Duration="240" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="6" OnDuration="60" OffDuration="60" OnPower="0.9" OffPower="0.9" CadenceResting="60" Cadence="90"/>
  <SteadyState Duration="240" Power="0.55" Cadence="85"/>
  <SteadyState Duration="120" Power="0.9" Cadence="100"/>
  <SteadyState Duration="60" Power="0.9" Cadence="65"/>
  <SteadyState Duration="120" Power="0.9" Cadence="100"/>
  <SteadyState Duration="60" Power="0.9" Cadence="65"/>
  <SteadyState Duration="120" Power="0.9" Cadence="100"/>
  <SteadyState Duration="60" Power="0.9" Cadence="65"/>
  <SteadyState Duration="120" Power="0.9" Cadence="100"/>
  <SteadyState Duration="60" Power="0.9" Cadence="65"/>
  <Cooldown Duration="360" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #2 Novanta</name>
 <description>Build Me Up: Week 0 Prep:  Novanta
Named after the number 90 in Italian, this workout is focused sweet spot training, centered around 90% of FTP. This pairs with Halvfems (90 in Danish) and Devedeset (90 in Croatian) to make up the sweet spot trifecta in this plan. The workouts are alphabetically ordered from easiest to hardest, so enjoy the hardest of these three challenging workouts today...
Stress points: 70
Z1: 16m
Z2: 2m
Z3: -
Z4: 41m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="420" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="4" OnDuration="240" OffDuration="60" OnPower="0.9" OffPower="0.9" Cadence="90" CadenceResting="65"/>
  <SteadyState Duration="180" Power="0.55" Cadence="85"/>
  <SteadyState Duration="300" Power="0.9" Cadence="90"/>
  <IntervalsT Repeat="5" OnDuration="60" OffDuration="60" OnPower="0.9" OffPower="0.9" Cadence="100" CadenceResting="70"/>
  <SteadyState Duration="300" Power="0.9" Cadence="90"/>
  <Cooldown Duration="300" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #3 Sneaky</name>
 <description>Build Me Up: Week 0 Prep:  Sneaky
The kind of workout that "sneaks" up on you, especially that last interval.
Stress points: 56
Z1: 18m
Z2: 10m
Z3: 24m
Z4: 8m
Z5: -
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.4" PowerHigh="0.6" />
  <SteadyState Duration="300" Power="0.6" Cadence="95"/>
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="60"/>
  <SteadyState Duration="60" Power="0.95" Cadence="60"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="60"/>
  <SteadyState Duration="60" Power="0.95" Cadence="60"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="60"/>
  <SteadyState Duration="60" Power="0.95" Cadence="60"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="60"/>
  <SteadyState Duration="30" Power="0.95" Cadence="100"/>
  <Warmup Duration="30" PowerLow="0.95" PowerHigh="1.2" />
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="300" Power="0.6" Cadence="90"/>
  <Cooldown Duration="300" PowerLow="0.6" PowerHigh="0.4" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #4 Devedeset</name>
 <description>Build Me Up: Week 1:  Devedeset
Named after the number 90 in Croatian, this workout is focused sweet spot training, centered around 90% of FTP. This pairs with Halvfems (90 in Danish) and Novanta (90 in Italian) to make up the sweet spot trifecta in this plan. The workouts are alphabetically ordered from easiest to hardest, so enjoy the easiest of these three challenging workouts today...
Stress points: 62
Z1: 26m
Z2: 3m
Z3: -
Z4: 31m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="600" Power="0.9" Cadence="90"/>
  <SteadyState Duration="240" Power="0.55" Cadence="85"/>
  <SteadyState Duration="600" Power="0.9" Cadence="80"/>
  <SteadyState Duration="240" Power="0.55" Cadence="85"/>
  <SteadyState Duration="120" Power="0.9" Cadence="90"/>
  <SteadyState Duration="60" Power="0.9" Cadence="70"/>
  <SteadyState Duration="120" Power="0.9" Cadence="90"/>
  <SteadyState Duration="60" Power="0.9" Cadence="70"/>
  <SteadyState Duration="240" Power="0.9" Cadence="100"/>
  <Cooldown Duration="420" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #5 Pedaling Drills</name>
 <description>Build Me Up: Week 1:  Pedaling Drills
We are working on your pedaling mechanics and basic skills here. These drills will help make you a more efficient rider, pedal with less wasted energy, and gain some "free" speed as you will be better able to put power through the entire pedal stroke instead of just the push down and pull up phases as most riders do. Imagine pedaling in circles rather than having 2 pistons for legs.
Stress points: 24
Z1: 14m
Z2: 4m
Z3: 11m
Z4: 1m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.85" Cadence="95"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="0.95" Cadence="105"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="110"/>
  <SteadyState Duration="150" Power="0.5" Cadence="85"/>
  <FreeRide Duration="600" FlatRoad="0"/>/>
  <Cooldown Duration="300" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #6 Pre-Training Plan</name>
 <description>Build Me Up: Week 1:  Pre-Training Plan
Introductory workout to be done prior to starting a training plan
Stress points: 38
Z1: 9m
Z2: 6m
Z3: 14m
Z4: 3m
Z5: 2m
Z6: 1m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.65" />
  <SteadyState Duration="300" Power="0.65" />
  <FreeRide Duration="120" FlatRoad="0"/>/>
  <SteadyState Duration="240" Power="0.8" />
  <FreeRide Duration="120" FlatRoad="0"/>/>
  <SteadyState Duration="180" Power="0.95" />
  <FreeRide Duration="120" FlatRoad="0"/>/>
  <SteadyState Duration="120" Power="1.09" />
  <FreeRide Duration="120" FlatRoad="0"/>/>
  <SteadyState Duration="60" Power="1.25" />
  <FreeRide Duration="120" FlatRoad="0"/>/>

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #7 Red Unicorn</name>
 <description>Build Me Up: Week 1:  Red Unicorn
All the Unicorn workouts are based off of the visual spectrum (Red, Orange, Yellow, Green, Blue, Indigo, Violet (purple)) with the same order of easiest to hardest.  So, Red Unicorn features the least training load, Orange Unicorn the second, etc. This is the easiest of them all, but it is still a great workout.
Stress points: 94
Z1: 22m
Z2: 28m
Z3: 27m
Z4: 1m
Z5: 13m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.4" PowerHigh="0.6" />
  <SteadyState Duration="300" Power="0.6" Cadence="95"/>
  <SteadyState Duration="60" Power="0.8" Cadence="95"/>
  <SteadyState Duration="30" Power="0.95" Cadence="95"/>
  <SteadyState Duration="30" Power="0.55" Cadence="85"/>
  <SteadyState Duration="60" Power="0.8" Cadence="100"/>
  <SteadyState Duration="30" Power="1.05" Cadence="100"/>
  <SteadyState Duration="30" Power="0.55" Cadence="85"/>
  <SteadyState Duration="60" Power="0.8" Cadence="105"/>
  <SteadyState Duration="30" Power="1.15" Cadence="105"/>
  <SteadyState Duration="30" Power="0.55" Cadence="85"/>
  <SteadyState Duration="240" Power="0.55" Cadence="85"/>
  <SteadyState Duration="60" Power="0.8" Cadence="90"/>
  <SteadyState Duration="30" Power="1.05" Cadence="70"/>
  <SteadyState Duration="60" Power="0.8" Cadence="90"/>
  <SteadyState Duration="30" Power="1.05" Cadence="70"/>
  <SteadyState Duration="60" Power="0.8" Cadence="90"/>
  <SteadyState Duration="30" Power="1.05" Cadence="70"/>
  <SteadyState Duration="60" Power="0.8" Cadence="90"/>
  <SteadyState Duration="30" Power="1.05" Cadence="70"/>
  <SteadyState Duration="60" Power="0.8" Cadence="90"/>
  <SteadyState Duration="30" Power="1.05" Cadence="70"/>
  <SteadyState Duration="60" Power="0.8" Cadence="90"/>
  <SteadyState Duration="30" Power="1.05" Cadence="70"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="6" OnDuration="30" OffDuration="60" OnPower="1.05" OffPower="0.8" CadenceResting="70" Cadence="100"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="6" OnDuration="30" OffDuration="60" OnPower="1.05" OffPower="0.8" CadenceResting="90" Cadence="90"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="6" OnDuration="30" OffDuration="60" OnPower="1.05" OffPower="0.8" CadenceResting="75" Cadence="60"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="300" Power="0.75" Cadence="95"/>
  <IntervalsT Repeat="5" OnDuration="60" OffDuration="60" OnPower="0.75" OffPower="0.75" CadenceResting="70" Cadence="105"/>
  <SteadyState Duration="300" Power="0.75" Cadence="95"/>
  <Cooldown Duration="360" PowerLow="0.75" PowerHigh="0.4" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #8 Halvfems</name>
 <description>Build Me Up: Week 2:  Halvfems
Named after the number 90 in Danish, this workout is focused sweet spot training, centered around 90% of FTP. This pairs with Devedeset (90 in Croatian) and Novanta (90 in Italian) to make up the sweet spot trifecta in this plan. The workouts are alphabetically ordered from easiest to hardest, so enjoy the middle of these three challenging workouts today...
Stress points: 68
Z1: 22m
Z2: 2m
Z3: -
Z4: 37m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="420" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="720" Power="0.9" Cadence="90"/>
  <SteadyState Duration="240" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="6" OnDuration="60" OffDuration="60" OnPower="0.9" OffPower="0.9" CadenceResting="60" Cadence="90"/>
  <SteadyState Duration="240" Power="0.55" Cadence="85"/>
  <SteadyState Duration="120" Power="0.9" Cadence="100"/>
  <SteadyState Duration="60" Power="0.9" Cadence="65"/>
  <SteadyState Duration="120" Power="0.9" Cadence="100"/>
  <SteadyState Duration="60" Power="0.9" Cadence="65"/>
  <SteadyState Duration="120" Power="0.9" Cadence="100"/>
  <SteadyState Duration="60" Power="0.9" Cadence="65"/>
  <SteadyState Duration="120" Power="0.9" Cadence="100"/>
  <SteadyState Duration="60" Power="0.9" Cadence="65"/>
  <Cooldown Duration="360" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #9 Mishmash</name>
 <description>Build Me Up: Week 2:  Mishmash
Some of this. Some of that. A mishmash of multi-zone work and cadence changes designed with a singular focus - making you faster!
Stress points: 90
Z1: 10m
Z2: 43m
Z3: 26m
Z4: 8m
Z5: 4m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.7" />
  <IntervalsT Repeat="1" OnDuration="60" OffDuration="180" OnPower="1.05" OffPower="0.8" CadenceResting="95" Cadence="65"/>
  <SteadyState Duration="60" Power="0.65" Cadence="85"/>
  <IntervalsT Repeat="1" OnDuration="60" OffDuration="180" OnPower="1.05" OffPower="0.8" CadenceResting="100" Cadence="65"/>
  <SteadyState Duration="60" Power="0.65" Cadence="85"/>
  <IntervalsT Repeat="1" OnDuration="60" OffDuration="180" OnPower="1.05" OffPower="0.8" CadenceResting="70" Cadence="100"/>
  <SteadyState Duration="60" Power="0.65" Cadence="85"/>
  <IntervalsT Repeat="1" OnDuration="60" OffDuration="180" OnPower="1.05" OffPower="0.8" CadenceResting="95" Cadence="65"/>
  <SteadyState Duration="120" Power="0.65" Cadence="85"/>
  <SteadyState Duration="240" Power="0.9" Cadence="95"/>
  <SteadyState Duration="240" Power="0.8" Cadence="85"/>
  <SteadyState Duration="240" Power="0.7" Cadence="75"/>
  <SteadyState Duration="240" Power="0.9" Cadence="75"/>
  <SteadyState Duration="240" Power="0.8" Cadence="85"/>
  <SteadyState Duration="240" Power="0.7" Cadence="95"/>
  <Cooldown Duration="720" PowerLow="0.9" PowerHigh="0.6" />
  <SteadyState Duration="120" Power="0.75" Cadence="65"/>
  <SteadyState Duration="60" Power="0.75" Cadence="65"/>
  <SteadyState Duration="120" Power="0.75" Cadence="95"/>
  <SteadyState Duration="60" Power="0.75" Cadence="65"/>
  <SteadyState Duration="120" Power="0.75" Cadence="65"/>
  <IntervalsT Repeat="6" OnDuration="60" OffDuration="60" OnPower="0.75" OffPower="0.75" Cadence="100" CadenceResting="60"/>
  <SteadyState Duration="180" Power="0.5" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #10 Orange Unicorn</name>
 <description>Build Me Up: Week 2:  Orange Unicorn
All the Unicorn workouts are based off of the visual spectrum (Red, Orange, Yellow, Green, Blue, Indigo, Violet (purple)) with the same order of easiest to hardest.  So, Red Unicorn features the least training load, Orange Unicorn the second, etc.
Stress points: 105
Z1: 21m
Z2: 4m
Z3: 51m
Z4: 1m
Z5: 13m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <SteadyState Duration="60" Power="0.8" Cadence="95"/>
  <SteadyState Duration="30" Power="0.95" Cadence="95"/>
  <SteadyState Duration="30" Power="0.55" Cadence="85"/>
  <SteadyState Duration="60" Power="0.8" Cadence="105"/>
  <SteadyState Duration="30" Power="1.05" Cadence="105"/>
  <SteadyState Duration="30" Power="0.55" Cadence="85"/>
  <SteadyState Duration="60" Power="0.8" Cadence="110"/>
  <SteadyState Duration="30" Power="1.15" Cadence="110"/>
  <SteadyState Duration="30" Power="0.55" Cadence="85"/>
  <SteadyState Duration="240" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="6" OnDuration="30" OffDuration="120" OnPower="1.05" OffPower="0.85"  />
  <SteadyState Duration="120" Power="0.55" />
  <IntervalsT Repeat="6" OnDuration="30" OffDuration="120" OnPower="1.05" OffPower="0.85" CadenceResting="75" Cadence="110"/>
  <SteadyState Duration="120" Power="0.55" />
  <IntervalsT Repeat="6" OnDuration="30" OffDuration="120" OnPower="1.05" OffPower="0.85" CadenceResting="65" Cadence="65"/>
  <SteadyState Duration="120" Power="0.55" />
  <IntervalsT Repeat="6" OnDuration="30" OffDuration="120" OnPower="1.05" OffPower="0.85"  />
  <Cooldown Duration="240" PowerLow="0.75" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #11 What Goes Up, Must Come Down</name>
 <description>Build Me Up: Week 2:  What Goes Up, Must Come Down
The duration goes up. The intensity comes down. Simple enough, right?
Stress points: 73
Z1: 16m
Z2: 9m
Z3: -
Z4: 35m
Z5: -
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.4" PowerHigh="0.65" />
  <SteadyState Duration="300" Power="0.65" Cadence="90"/>
  <SteadyState Duration="180" Power="0.75" Cadence="100"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="300" Power="1.0" Cadence="100"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="360" Power="0.98" Cadence="90"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="420" Power="0.96" Cadence="80"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="480" Power="0.94" Cadence="70"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="540" Power="0.92" Cadence="60"/>
  <Cooldown Duration="120" PowerLow="0.65" PowerHigh="0.4" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #12 Amalgam</name>
 <description>Build Me Up: Week 3:  Amalgam
5 different interval "Amalgams" for your fitness pleasure! We will be mixing it up with on-bike position changes as well as working on pedaling fluidity. Then 10 minutes right at FTP... You can do it! Follow that up with some short and sharp efforts... #Power! And then a series of "Shark Teeth!" Finish off today with ANOTHER 10 minutes right at FTP! Even though you'll be tired, I know you can do it! #MentalStrength
Stress points: 99
Z1: 25m
Z2: 21m
Z3: 10m
Z4: 21m
Z5: 9m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="0.85" Cadence="75"/>
  <SteadyState Duration="60" Power="0.85" Cadence="60"/>
  <SteadyState Duration="120" Power="0.85" Cadence="75"/>
  <SteadyState Duration="60" Power="0.85" Cadence="60"/>
  <IntervalsT Repeat="2" OnDuration="60" OffDuration="60" OnPower="0.85" OffPower="0.85" Cadence="75" CadenceResting="55"/>
  <SteadyState Duration="300" Power="0.65" Cadence="85"/>
  <SteadyState Duration="600" Power="1.0" Cadence="90"/>
  <SteadyState Duration="150" Power="0.5" Cadence="85"/>
  <SteadyState Duration="180" Power="0.65" Cadence="85"/>
  <IntervalsT Repeat="6" OnDuration="15" OffDuration="45" OnPower="1.1" OffPower="0.45" Cadence="110" CadenceResting="85"/>
  <SteadyState Duration="300" Power="0.65" Cadence="85"/>
  <Warmup Duration="60" PowerLow="1.05" PowerHigh="1.15" />
  <Cooldown Duration="60" PowerLow="1.15" PowerHigh="1.05" />
  <SteadyState Duration="60" Power="0.5" Cadence="85"/>
  <Warmup Duration="60" PowerLow="1.05" PowerHigh="1.15" />
  <Cooldown Duration="60" PowerLow="1.15" PowerHigh="1.05" />
  <SteadyState Duration="60" Power="0.5" Cadence="85"/>
  <Warmup Duration="60" PowerLow="1.05" PowerHigh="1.15" />
  <Cooldown Duration="60" PowerLow="1.15" PowerHigh="1.05" />
  <SteadyState Duration="150" Power="0.5" Cadence="85"/>
  <SteadyState Duration="180" Power="0.65" Cadence="85"/>
  <SteadyState Duration="600" Power="1.0" Cadence="90"/>
  <Cooldown Duration="300" PowerLow="0.65" PowerHigh="0.4" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #13 Ham Sandwich</name>
 <description>Build Me Up: Week 3:  Ham Sandwich
The Ham Sandwich features sweet spot over/unders, with 30/30s "sandwiched" in between. The over/under intervals are alternate between 2 minutes Z3 (88%) and 30 seconds Z5 (110%). The 30/30s up the ante a bit and alternate between 30 seconds Z6 (130%) and 30 seconds Z1 (50%). Yes, there are rest breaks, but they are purposely short to keep the heart rate and metabolic demands up, and I dislike rest (kidding!) Better eat your sandwich quick before the bread gets soggy...
Stress points: 76
Z1: 26m
Z2: 5m
Z3: 18m
Z4: 1m
Z5: 5m
Z6: 8m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.8" Cadence="95"/>
  <SteadyState Duration="30" Power="0.95" Cadence="95"/>
  <SteadyState Duration="30" Power="0.8" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="105"/>
  <SteadyState Duration="30" Power="0.8" Cadence="85"/>
  <SteadyState Duration="30" Power="1.1" Cadence="110"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <Warmup Duration="30" PowerLow="0.5" PowerHigh="0.88" />
  <IntervalsT Repeat="4" OnDuration="30" OffDuration="120" OnPower="1.1" OffPower="0.88" CadenceResting="90" Cadence="110"/>
  <Cooldown Duration="30" PowerLow="0.88" PowerHigh="0.5" />
  <SteadyState Duration="150" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="30" OffDuration="30" OnPower="1.3" OffPower="0.5" Cadence="110" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="30" OffDuration="30" OnPower="1.3" OffPower="0.5" Cadence="110" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="30" OffDuration="30" OnPower="1.3" OffPower="0.5" Cadence="110" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <Warmup Duration="30" PowerLow="0.5" PowerHigh="0.88" />
  <IntervalsT Repeat="4" OnDuration="30" OffDuration="120" OnPower="1.1" OffPower="0.88" CadenceResting="90" Cadence="110"/>
  <Cooldown Duration="120" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #14 Novanta</name>
 <description>Build Me Up: Week 3:  Novanta
Named after the number 90 in Italian, this workout is focused sweet spot training, centered around 90% of FTP. This pairs with Halvfems (90 in Danish) and Devedeset (90 in Croatian) to make up the sweet spot trifecta in this plan. The workouts are alphabetically ordered from easiest to hardest, so enjoy the hardest of these three challenging workouts today...
Stress points: 70
Z1: 16m
Z2: 2m
Z3: -
Z4: 41m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="420" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="4" OnDuration="240" OffDuration="60" OnPower="0.9" OffPower="0.9" Cadence="90" CadenceResting="65"/>
  <SteadyState Duration="180" Power="0.55" Cadence="85"/>
  <SteadyState Duration="300" Power="0.9" Cadence="90"/>
  <IntervalsT Repeat="5" OnDuration="60" OffDuration="60" OnPower="0.9" OffPower="0.9" Cadence="100" CadenceResting="70"/>
  <SteadyState Duration="300" Power="0.9" Cadence="90"/>
  <Cooldown Duration="300" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #15 Yellow Unicorn</name>
 <description>Build Me Up: Week 3:  Yellow Unicorn
All the Unicorn workouts are based off of the visual spectrum (Red, Orange, Yellow, Green, Blue, Indigo, Violet (purple)) with the same order of easiest to hardest.  So, Red Unicorn features the least training load, Orange Unicorn the second, etc.
Stress points: 120
Z1: 23m
Z2: 23m
Z3: 39m
Z4: 1m
Z5: 19m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <SteadyState Duration="60" Power="0.8" Cadence="95"/>
  <SteadyState Duration="30" Power="0.95" Cadence="95"/>
  <SteadyState Duration="30" Power="0.55" Cadence="85"/>
  <SteadyState Duration="60" Power="0.8" Cadence="105"/>
  <SteadyState Duration="30" Power="1.05" Cadence="105"/>
  <SteadyState Duration="30" Power="0.55" Cadence="85"/>
  <SteadyState Duration="60" Power="0.8" Cadence="110"/>
  <SteadyState Duration="30" Power="1.15" Cadence="110"/>
  <SteadyState Duration="30" Power="0.55" Cadence="85"/>
  <SteadyState Duration="240" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="6" OnDuration="60" OffDuration="120" OnPower="1.05" OffPower="0.83"  />
  <SteadyState Duration="120" Power="0.5" />
  <IntervalsT Repeat="6" OnDuration="60" OffDuration="120" OnPower="1.05" OffPower="0.83" CadenceResting="70" Cadence="110"/>
  <SteadyState Duration="120" Power="0.5" />
  <IntervalsT Repeat="6" OnDuration="60" OffDuration="120" OnPower="1.05" OffPower="0.83" CadenceResting="95" Cadence="60"/>
  <SteadyState Duration="120" Power="0.5" />
  <SteadyState Duration="300" Power="0.75" Cadence="90"/>
  <IntervalsT Repeat="5" OnDuration="60" OffDuration="60" OnPower="0.75" OffPower="0.75" Cadence="100" CadenceResting="65"/>
  <SteadyState Duration="300" Power="0.75" Cadence="90"/>
  <Cooldown Duration="300" PowerLow="0.6" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #16 Pedaling Drills</name>
 <description>Build Me Up: Week 4:  Pedaling Drills
We are working on your pedaling mechanics and basic skills here. These drills will help make you a more efficient rider, pedal with less wasted energy, and gain some "free" speed as you will be better able to put power through the entire pedal stroke instead of just the push down and pull up phases as most riders do. Imagine pedaling in circles rather than having 2 pistons for legs.
Stress points: 24
Z1: 14m
Z2: 4m
Z3: 11m
Z4: 1m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.85" Cadence="95"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="0.95" Cadence="105"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="110"/>
  <SteadyState Duration="150" Power="0.5" Cadence="85"/>
  <FreeRide Duration="600" FlatRoad="0"/>/>
  <Cooldown Duration="300" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #17 Purple Unicorn</name>
 <description>Build Me Up: Week 4:  Purple Unicorn
All the Unicorn workouts are based off of the visual spectrum (Red, Orange, Yellow, Green, Blue, Indigo, Violet (purple)) with the same order of easiest to hardest.  So, Red Unicorn features the least training load, Orange Unicorn the second, and Purple the hardest... Enjoy!
Stress points: 132
Z1: 29m
Z2: 6m
Z3: 43m
Z4: 6m
Z5: 22m
Z6: 1m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.85" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="180" Power="0.85" Cadence="90"/>
  <SteadyState Duration="60" Power="1.05" Cadence="65"/>
  <SteadyState Duration="30" Power="1.15" Cadence="65"/>
  <SteadyState Duration="180" Power="0.85" Cadence="90"/>
  <SteadyState Duration="60" Power="1.05" Cadence="65"/>
  <SteadyState Duration="30" Power="1.15" Cadence="65"/>
  <SteadyState Duration="180" Power="0.85" Cadence="90"/>
  <SteadyState Duration="60" Power="1.05" Cadence="65"/>
  <SteadyState Duration="30" Power="1.15" Cadence="65"/>
  <SteadyState Duration="180" Power="0.85" Cadence="90"/>
  <SteadyState Duration="60" Power="1.05" Cadence="65"/>
  <SteadyState Duration="30" Power="1.15" Cadence="65"/>
  <SteadyState Duration="300" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.85" Cadence="75"/>
  <SteadyState Duration="60" Power="1.05" Cadence="90"/>
  <SteadyState Duration="30" Power="1.15" Cadence="105"/>
  <SteadyState Duration="180" Power="0.85" Cadence="75"/>
  <SteadyState Duration="60" Power="1.05" Cadence="90"/>
  <SteadyState Duration="30" Power="1.15" Cadence="105"/>
  <SteadyState Duration="180" Power="0.85" Cadence="75"/>
  <SteadyState Duration="60" Power="1.05" Cadence="90"/>
  <SteadyState Duration="30" Power="1.15" Cadence="105"/>
  <SteadyState Duration="180" Power="0.85" Cadence="75"/>
  <SteadyState Duration="60" Power="1.05" Cadence="90"/>
  <SteadyState Duration="30" Power="1.15" Cadence="105"/>
  <SteadyState Duration="300" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.85" Cadence="90"/>
  <SteadyState Duration="60" Power="1.05" Cadence="75"/>
  <SteadyState Duration="30" Power="1.15" Cadence="65"/>
  <SteadyState Duration="180" Power="0.85" Cadence="90"/>
  <SteadyState Duration="60" Power="1.05" Cadence="75"/>
  <SteadyState Duration="30" Power="1.15" Cadence="65"/>
  <SteadyState Duration="180" Power="0.85" Cadence="90"/>
  <SteadyState Duration="60" Power="1.05" Cadence="75"/>
  <SteadyState Duration="30" Power="1.15" Cadence="65"/>
  <SteadyState Duration="180" Power="0.85" Cadence="90"/>
  <SteadyState Duration="60" Power="1.05" Cadence="75"/>
  <SteadyState Duration="30" Power="1.15" Cadence="65"/>
  <SteadyState Duration="300" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.75" Cadence="90"/>
  <SteadyState Duration="60" Power="0.95" Cadence="100"/>
  <SteadyState Duration="30" Power="1.05" Cadence="65"/>
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="1.0" Cadence="100"/>
  <SteadyState Duration="30" Power="1.1" Cadence="65"/>
  <SteadyState Duration="180" Power="0.85" Cadence="90"/>
  <SteadyState Duration="60" Power="1.05" Cadence="100"/>
  <SteadyState Duration="30" Power="1.15" Cadence="65"/>
  <SteadyState Duration="180" Power="0.9" Cadence="90"/>
  <SteadyState Duration="60" Power="1.1" Cadence="100"/>
  <SteadyState Duration="30" Power="1.2" Cadence="100"/>
  <Cooldown Duration="180" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #18 Sneaky</name>
 <description>Build Me Up: Week 4:  Sneaky
The kind of workout that "sneaks" up on you, especially that last interval.
Stress points: 56
Z1: 18m
Z2: 10m
Z3: 24m
Z4: 8m
Z5: -
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.4" PowerHigh="0.6" />
  <SteadyState Duration="300" Power="0.6" Cadence="95"/>
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="60"/>
  <SteadyState Duration="60" Power="0.95" Cadence="60"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="60"/>
  <SteadyState Duration="60" Power="0.95" Cadence="60"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="60"/>
  <SteadyState Duration="60" Power="0.95" Cadence="60"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="60"/>
  <SteadyState Duration="30" Power="0.95" Cadence="100"/>
  <Warmup Duration="30" PowerLow="0.95" PowerHigh="1.2" />
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="300" Power="0.6" Cadence="90"/>
  <Cooldown Duration="300" PowerLow="0.6" PowerHigh="0.4" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #19 #8</name>
 <description>Build Me Up: Week 5:  #8
Named for the atomic number of Oxygen, this VO2 workout is all about what will be in short supply. Twice through a block of intervals up above threshold power will have you wishing for some extra O2, but you'll have to wait until the cool down to get it. Though there is a nice Zone 2 break between blocks of Z5 intervals where you can grab a little bit of extra air in your lungs.
Stress points: 65
Z1: 34m
Z2: 13m
Z3: -
Z4: 1m
Z5: 13m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="3" OnDuration="120" OffDuration="180" OnPower="1.15" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <SteadyState Duration="600" Power="0.65" Cadence="90"/>
  <IntervalsT Repeat="3" OnDuration="120" OffDuration="180" OnPower="1.15" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <Cooldown Duration="300" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #20 Escalation</name>
 <description>Build Me Up: Week 5:  Escalation
A series of progressive intervals where each successive interval is a higher intensity than the last. The Escalation in intensity will challenge you to dig deeper as you get more fatigued.
Stress points: 114
Z1: 31m
Z2: 9m
Z3: 32m
Z4: 15m
Z5: 3m
Z6: 5m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="240" Power="0.95" Cadence="100"/>
  <SteadyState Duration="480" Power="0.8" Cadence="90"/>
  <SteadyState Duration="180" Power="0.5" Cadence="85"/>
  <SteadyState Duration="240" Power="0.95" Cadence="70"/>
  <SteadyState Duration="120" Power="0.8" Cadence="70"/>
  <SteadyState Duration="60" Power="0.8" Cadence="100"/>
  <SteadyState Duration="120" Power="0.8" Cadence="70"/>
  <SteadyState Duration="60" Power="0.8" Cadence="100"/>
  <SteadyState Duration="120" Power="0.8" Cadence="70"/>
  <SteadyState Duration="180" Power="0.5" Cadence="85"/>
  <Warmup Duration="30" PowerLow="0.8" PowerHigh="1.05" />
  <SteadyState Duration="30" Power="1.05" Cadence="100"/>
  <Cooldown Duration="30" PowerLow="1.05" PowerHigh="0.8" />
  <SteadyState Duration="60" Power="0.8" Cadence="85"/>
  <Warmup Duration="30" PowerLow="0.8" PowerHigh="1.05" />
  <SteadyState Duration="30" Power="1.05" Cadence="100"/>
  <Cooldown Duration="30" PowerLow="1.05" PowerHigh="0.8" />
  <SteadyState Duration="120" Power="0.8" Cadence="85"/>
  <Warmup Duration="30" PowerLow="0.8" PowerHigh="1.05" />
  <SteadyState Duration="30" Power="1.05" Cadence="100"/>
  <Cooldown Duration="30" PowerLow="1.05" PowerHigh="0.8" />
  <SteadyState Duration="180" Power="0.8" Cadence="85"/>
  <Warmup Duration="30" PowerLow="0.8" PowerHigh="1.05" />
  <SteadyState Duration="30" Power="1.05" Cadence="100"/>
  <Cooldown Duration="30" PowerLow="1.05" PowerHigh="0.8" />
  <SteadyState Duration="180" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="0.95" Cadence="90"/>
  <IntervalsT Repeat="4" OnDuration="60" OffDuration="60" OnPower="0.8" OffPower="0.8" Cadence="90" CadenceResting="65"/>
  <SteadyState Duration="120" Power="0.95" Cadence="90"/>
  <SteadyState Duration="300" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="30" OffDuration="30" OnPower="1.5" OffPower="0.65" Cadence="100" CadenceResting="85"/>
  <SteadyState Duration="300" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="30" OffDuration="30" OnPower="1.5" OffPower="0.65" Cadence="100" CadenceResting="85"/>
  <Cooldown Duration="180" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #21 Method</name>
 <description>Build Me Up: Week 5:  Method
There is a Method to the madness here. We are working on your pedaling mechanics and basic skills here. These drills will help make you a more efficient rider, pedal with less wasted energy, and gain some "free" speed as you will be better able to put power through the entire pedal stroke instead of just the push down and pull up phases as most riders do. Imagine pedaling in circles rather than having 2 pistons for legs.
Stress points: 80
Z1: 20m
Z2: 22m
Z3: 43m
Z4: 1m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.85" Cadence="95"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="0.95" Cadence="105"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="110"/>
  <SteadyState Duration="150" Power="0.5" Cadence="85"/>
  <FreeRide Duration="600" FlatRoad="0"/>/>
  <SteadyState Duration="600" Power="0.75" Cadence="75"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="300" Power="0.8" Cadence="75"/>
  <SteadyState Duration="300" Power="0.8" Cadence="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="0.85" Cadence="100"/>
  <SteadyState Duration="30" Power="0.85" Cadence="65"/>
  <SteadyState Duration="120" Power="0.85" Cadence="100"/>
  <SteadyState Duration="30" Power="0.85" Cadence="65"/>
  <SteadyState Duration="120" Power="0.85" Cadence="100"/>
  <SteadyState Duration="30" Power="0.85" Cadence="65"/>
  <SteadyState Duration="120" Power="0.85" Cadence="100"/>
  <SteadyState Duration="30" Power="0.85" Cadence="65"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="600" Power="0.8" />
  <SteadyState Duration="120" Power="0.5" />
  <SteadyState Duration="120" Power="0.75" />
  <Warmup Duration="120" PowerLow="0.65" PowerHigh="0.85" />
  <Cooldown Duration="120" PowerLow="0.85" PowerHigh="0.65" />
  <SteadyState Duration="120" Power="0.75" />
  <Cooldown Duration="120" PowerLow="0.85" PowerHigh="0.65" />
  <Cooldown Duration="180" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #22 Tine</name>
 <description>Build Me Up: Week 5:  Tine
Intervals that gradually come to a "sharp point," just like the Tines on a fork!
Stress points: 56
Z1: 27m
Z2: 4m
Z3: 18m
Z4: 10m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <Warmup Duration="90" PowerLow="0.9" PowerHigh="1.0" />
  <Cooldown Duration="90" PowerLow="1.0" PowerHigh="0.9" />
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <SteadyState Duration="240" Power="0.5" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="80"/>
  <Warmup Duration="90" PowerLow="0.9" PowerHigh="1.0" />
  <Cooldown Duration="90" PowerLow="1.0" PowerHigh="0.9" />
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <SteadyState Duration="240" Power="0.5" Cadence="85"/>
  <SteadyState Duration="180" Power="0.8" Cadence="70"/>
  <Warmup Duration="90" PowerLow="0.9" PowerHigh="1.0" />
  <Cooldown Duration="90" PowerLow="1.0" PowerHigh="0.9" />
  <SteadyState Duration="180" Power="0.8" Cadence="90"/>
  <SteadyState Duration="240" Power="0.5" Cadence="85"/>
  <Cooldown Duration="360" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #23 15.9</name>
 <description>Build Me Up: Week 6:  15.9
Named for the atomic mass of Oxygen, this VO2max workout is designed to help you make better use of that oh-so-precious resource. The workout features two main sets. The first is a block of intervals above threshold, pushing your body to work and recover repeatedly. The second is a sustained sub-threshold effort that asks you to work hard on tired legs. You get to breathe easy - and grab some extra O2 - during the long warm up and cool down.
Stress points: 74
Z1: 30m
Z2: 5m
Z3: 2m
Z4: 11m
Z5: 14m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="150" OffDuration="180" OnPower="1.15" OffPower="0.55" Cadence="105" CadenceResting="85"/>
  <SteadyState Duration="600" Power="0.9" Cadence="90"/>
  <Cooldown Duration="450" PowerLow="0.9" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #24 Attack!</name>
 <description>Build Me Up: Week 6:  Attack!
With a focus on short efforts, the focus here is on your ability to Attack(!) the group and recover after. The kind of punchy top end acceleration that you will need to compete... against a group or just your own PRs!
Stress points: 61
Z1: 20m
Z2: 4m
Z3: 33m
Z4: 1m
Z5: 1m
Z6: 2m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.5" Cadence="110"/>
  <SteadyState Duration="570" Power="0.8" Cadence="90"/>
  <SteadyState Duration="180" Power="0.55" Cadence="85"/>
  <SteadyState Duration="30" Power="1.5" Cadence="110"/>
  <SteadyState Duration="630" Power="0.8" Cadence="90"/>
  <SteadyState Duration="180" Power="0.55" Cadence="85"/>
  <SteadyState Duration="30" Power="1.5" Cadence="110"/>
  <SteadyState Duration="750" Power="0.8" Cadence="90"/>
  <Cooldown Duration="300" PowerLow="0.8" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #25 C.A.</name>
 <description>Build Me Up: Week 6:  C.A.
CA stands for Cadence Adjustment. We all have our preferred cadence range. It is important to be able to pedal outside of that. This workout challenges your ability to spin the pedals. And to do so outside of your typical comfort zone.
Stress points: 59
Z1: 21m
Z2: 13m
Z3: 10m
Z4: 15m
Z5: 2m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.25" PowerHigh="0.65" />
  <SteadyState Duration="300" Power="0.65" Cadence="90"/>
  <IntervalsT Repeat="3" OnDuration="30" OffDuration="30" OnPower="1.1" OffPower="0.55" Cadence="100" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.9" Cadence="90"/>
  <SteadyState Duration="120" Power="0.85" Cadence="100"/>
  <SteadyState Duration="60" Power="0.75" Cadence="115"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.9" Cadence="90"/>
  <SteadyState Duration="120" Power="0.85" Cadence="100"/>
  <SteadyState Duration="60" Power="0.75" Cadence="115"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.9" Cadence="90"/>
  <SteadyState Duration="120" Power="0.85" Cadence="100"/>
  <SteadyState Duration="60" Power="0.75" Cadence="115"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.9" Cadence="90"/>
  <SteadyState Duration="120" Power="0.85" Cadence="100"/>
  <SteadyState Duration="60" Power="0.75" Cadence="115"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.9" Cadence="90"/>
  <SteadyState Duration="120" Power="0.85" Cadence="100"/>
  <SteadyState Duration="60" Power="0.75" Cadence="115"/>
  <Cooldown Duration="420" PowerLow="0.75" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #26 HWBTWTDWH</name>
 <description>Build Me Up: Week 6:  HWBTWTDWH
Hard Work Beats Talent When Talent Doesn't Work Hard.
Stress points: 94
Z1: 25m
Z2: 24m
Z3: 22m
Z4: 16m
Z5: 3m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.8" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" />
  <IntervalsT Repeat="5" OnDuration="60" OffDuration="120" OnPower="0.93" OffPower="0.88" CadenceResting="90" Cadence="60"/>
  <SteadyState Duration="180" Power="0.5" Cadence="85"/>
  <SteadyState Duration="300" Power="0.75" Cadence="70"/>
  <SteadyState Duration="300" Power="0.83" Cadence="85"/>
  <SteadyState Duration="300" Power="0.91" Cadence="100"/>
  <SteadyState Duration="180" Power="0.5" Cadence="85"/>
  <SteadyState Duration="300" Power="0.91" Cadence="100"/>
  <SteadyState Duration="300" Power="0.83" Cadence="85"/>
  <IntervalsT Repeat="2" OnDuration="30" OffDuration="120" OnPower="0.75" OffPower="0.75" CadenceResting="70" Cadence="70"/>
  <SteadyState Duration="180" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.1" Cadence="65"/>
  <Cooldown Duration="30" PowerLow="1.1" PowerHigh="0.75" />
  <SteadyState Duration="300" Power="0.75" Cadence="90"/>
  <Warmup Duration="30" PowerLow="0.75" PowerHigh="1.1" />
  <SteadyState Duration="30" Power="1.1" Cadence="65"/>
  <SteadyState Duration="60" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.1" Cadence="65"/>
  <Cooldown Duration="30" PowerLow="1.1" PowerHigh="0.75" />
  <SteadyState Duration="300" Power="0.75" Cadence="90"/>
  <Warmup Duration="30" PowerLow="0.75" PowerHigh="1.1" />
  <SteadyState Duration="30" Power="1.1" Cadence="65"/>
  <Cooldown Duration="360" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #27 Uphill Battle</name>
 <description>Build Me Up: Week 6:  Uphill Battle
Another one of those workouts that gets harder as it goes on, making it feel like you are in an "uphill battle."
Stress points: 71
Z1: 27m
Z2: 10m
Z3: 1m
Z4: 16m
Z5: 1m
Z6: 6m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.8" Cadence="95"/>
  <SteadyState Duration="60" Power="0.65" Cadence="85"/>
  <SteadyState Duration="30" Power="0.9" Cadence="105"/>
  <SteadyState Duration="60" Power="0.65" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="115"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="300" Power="0.95" Cadence="95"/>
  <Warmup Duration="30" PowerLow="1.0" PowerHigh="1.5" />
  <SteadyState Duration="150" Power="0.5" Cadence="85"/>
  <SteadyState Duration="300" Power="0.95" Cadence="95"/>
  <Warmup Duration="30" PowerLow="1.0" PowerHigh="1.5" />
  <SteadyState Duration="150" Power="0.5" Cadence="85"/>
  <SteadyState Duration="300" Power="0.95" Cadence="95"/>
  <Warmup Duration="30" PowerLow="1.0" PowerHigh="1.5" />
  <SteadyState Duration="180" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="30" OffDuration="30" OnPower="1.3" OffPower="0.7" Cadence="100" CadenceResting="90"/>
  <SteadyState Duration="180" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="30" OffDuration="30" OnPower="1.4" OffPower="0.6" Cadence="100" CadenceResting="90"/>
  <Cooldown Duration="420" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #28 Cucumber</name>
 <description>Build Me Up: Week 7:  Cucumber
This workout improves your ability to deal with lactate and stay cool under pressure, AKA "Cool as a cucumber."
Stress points: 110
Z1: 15m
Z2: 16m
Z3: 13m
Z4: 44m
Z5: -
Z6: 2m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.25" PowerHigh="0.6" />
  <SteadyState Duration="300" Power="0.6" Cadence="90"/>
  <SteadyState Duration="180" Power="0.75" Cadence="100"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="30" Power="1.0" Cadence="100"/>
  <SteadyState Duration="30" Power="1.3" Cadence="110"/>
  <SteadyState Duration="15" Power="1.5" Cadence="115"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="600" Power="0.9" Cadence="90"/>
  <SteadyState Duration="120" Power="0.67" Cadence="85"/>
  <SteadyState Duration="600" Power="0.9" Cadence="75"/>
  <SteadyState Duration="120" Power="0.67" Cadence="85"/>
  <SteadyState Duration="200" Power="0.9" Cadence="90"/>
  <SteadyState Duration="200" Power="0.9" Cadence="105"/>
  <SteadyState Duration="200" Power="0.9" Cadence="90"/>
  <SteadyState Duration="120" Power="0.67" Cadence="85"/>
  <SteadyState Duration="30" Power="1.0" Cadence="100"/>
  <SteadyState Duration="30" Power="1.3" Cadence="110"/>
  <SteadyState Duration="15" Power="1.5" Cadence="115"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="300" Power="0.95" Cadence="90"/>
  <SteadyState Duration="300" Power="0.85" Cadence="90"/>
  <SteadyState Duration="120" Power="0.67" Cadence="85"/>
  <SteadyState Duration="150" Power="0.95" Cadence="100"/>
  <SteadyState Duration="150" Power="0.85" Cadence="80"/>
  <SteadyState Duration="150" Power="0.95" Cadence="100"/>
  <SteadyState Duration="150" Power="0.85" Cadence="80"/>
  <SteadyState Duration="150" Power="0.95" Cadence="100"/>
  <SteadyState Duration="150" Power="0.85" Cadence="80"/>
  <SteadyState Duration="30" Power="1.0" Cadence="100"/>
  <SteadyState Duration="30" Power="1.3" Cadence="110"/>
  <SteadyState Duration="15" Power="1.5" Cadence="115"/>
  <Cooldown Duration="255" PowerLow="0.6" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #29 Giza</name>
 <description>Build Me Up: Week 7:  Giza
Like the Great Pyramid of Giza, this workout goes up... And then comes back down. Also like the pyramids, it is a big workout with sustained workloads. Build a monument to your own fitness here!
Stress points: 56
Z1: 15m
Z2: 19m
Z3: 24m
Z4: 1m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="420" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="480" Power="0.75" Cadence="75"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="480" Power="0.8" Cadence="85"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="480" Power="0.85" Cadence="100"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="480" Power="0.8" Cadence="85"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="480" Power="0.75" Cadence="75"/>
  <Cooldown Duration="240" PowerLow="0.75" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #30 Kirizuma</name>
 <description>Build Me Up: Week 7:  Kirizuma
The main set today features intervals shaped like the famous Japanese roofs for which this workout is named.
Stress points: 112
Z1: 32m
Z2: 4m
Z3: 2m
Z4: 45m
Z5: 7m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.7" />
  <SteadyState Duration="60" Power="0.75" Cadence="95"/>
  <SteadyState Duration="60" Power="0.8" Cadence="95"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="60" Power="0.85" Cadence="100"/>
  <SteadyState Duration="60" Power="0.9" Cadence="100"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="60" Power="0.95" Cadence="105"/>
  <SteadyState Duration="60" Power="1.0" Cadence="105"/>
  <SteadyState Duration="180" Power="0.5" Cadence="85"/>
  <SteadyState Duration="240" Power="0.93" Cadence="90"/>
  <SteadyState Duration="120" Power="0.98" Cadence="90"/>
  <SteadyState Duration="60" Power="1.03" Cadence="90"/>
  <SteadyState Duration="30" Power="1.1" Cadence="90"/>
  <SteadyState Duration="60" Power="1.03" Cadence="90"/>
  <SteadyState Duration="120" Power="0.98" Cadence="90"/>
  <SteadyState Duration="240" Power="0.93" Cadence="90"/>
  <SteadyState Duration="240" Power="0.5" Cadence="85"/>
  <SteadyState Duration="240" Power="0.93" Cadence="90"/>
  <SteadyState Duration="120" Power="0.98" Cadence="90"/>
  <SteadyState Duration="60" Power="1.03" Cadence="90"/>
  <SteadyState Duration="30" Power="1.1" Cadence="90"/>
  <SteadyState Duration="60" Power="1.03" Cadence="90"/>
  <SteadyState Duration="120" Power="0.98" Cadence="90"/>
  <SteadyState Duration="240" Power="0.93" Cadence="90"/>
  <SteadyState Duration="240" Power="0.5" Cadence="85"/>
  <SteadyState Duration="240" Power="0.93" Cadence="90"/>
  <SteadyState Duration="120" Power="0.98" Cadence="95"/>
  <SteadyState Duration="60" Power="1.03" Cadence="100"/>
  <SteadyState Duration="30" Power="1.1" Cadence="105"/>
  <SteadyState Duration="60" Power="1.03" Cadence="100"/>
  <SteadyState Duration="120" Power="0.98" Cadence="95"/>
  <SteadyState Duration="240" Power="0.93" Cadence="90"/>
  <SteadyState Duration="240" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="60" OffDuration="60" OnPower="1.1" OffPower="0.5" Cadence="100" CadenceResting="85"/>
  <Cooldown Duration="270" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #31 LOX</name>
 <description>Build Me Up: Week 7:  LOX
LOX is shorthand for liquid oxygen, which is used in rocket boosters. That is how your legs will feel after that workout - ROCKETS!
Stress points: 78
Z1: 28m
Z2: 4m
Z3: 1m
Z4: 11m
Z5: 16m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="180" OffDuration="180" OnPower="1.15" OffPower="0.55" Cadence="105" CadenceResting="85"/>
  <SteadyState Duration="600" Power="0.9" Cadence="90"/>
  <Cooldown Duration="300" PowerLow="0.9" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #32 Spaded Sweetie</name>
 <description>Build Me Up: Week 7:  Spaded Sweetie
The Spaded Sweetie starts off with a 15 minute warm up to prime the engines and ready the mind.  Then, we move into a spade interval set starting off very hard, but short, and gradually reducing the intensity while upping the time... Only to go back up again!  From there, we will move into a progressive over/under sweet spot interval featuring changes in cadence and intensity that culminates in a 1min FULL GAS effort! This is a tough workout, but feautures a lot of quality time at VO2 and threshold.
Stress points: 75
Z1: 20m
Z2: 9m
Z3: 5m
Z4: 17m
Z5: 6m
Z6: 3m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.95" Cadence="95"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="105"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.15" Cadence="115"/>
  <SteadyState Duration="150" Power="0.5" Cadence="85"/>
  <SteadyState Duration="15" Power="1.5" Cadence="110"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.35" Cadence="110"/>
  <SteadyState Duration="60" Power="0.5" Cadence="85"/>
  <SteadyState Duration="60" Power="1.2" Cadence="110"/>
  <SteadyState Duration="60" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.35" Cadence="110"/>
  <SteadyState Duration="60" Power="0.5" Cadence="85"/>
  <SteadyState Duration="15" Power="1.5" Cadence="110"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <Warmup Duration="30" PowerLow="0.65" PowerHigh="0.88" />
  <SteadyState Duration="240" Power="0.88" Cadence="95"/>
  <SteadyState Duration="60" Power="1.05" Cadence="105"/>
  <SteadyState Duration="15" Power="0.65" Cadence="85"/>
  <Warmup Duration="30" PowerLow="0.65" PowerHigh="0.92" />
  <SteadyState Duration="240" Power="0.92" Cadence="95"/>
  <SteadyState Duration="60" Power="1.05" Cadence="105"/>
  <SteadyState Duration="30" Power="0.65" Cadence="85"/>
  <Warmup Duration="30" PowerLow="0.65" PowerHigh="0.96" />
  <SteadyState Duration="240" Power="0.96" Cadence="95"/>
  <SteadyState Duration="60" Power="1.06" Cadence="105"/>
  <SteadyState Duration="60" Power="0.65" Cadence="85"/>
  <Warmup Duration="30" PowerLow="0.65" PowerHigh="1.0" />
  <SteadyState Duration="240" Power="1.0" Cadence="95"/>
  <SteadyState Duration="60" Power="1.05" Cadence="105"/>
  <SteadyState Duration="120" Power="0.65" Cadence="85"/>
  <Warmup Duration="30" PowerLow="0.65" PowerHigh="1.04" />
  <SteadyState Duration="240" Power="1.04" Cadence="95"/>
  <Warmup Duration="60" PowerLow="1.04" PowerHigh="1.2" Cadence="58"/>
  <Cooldown Duration="345" PowerLow="0.75" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #33 Bricolage</name>
 <description>Build Me Up: Week 8:  Bricolage
An assortment of skills, drills, and work across a range of zones. Featuring pedaling fluidity work and working on your ability to recover under pressure.
Stress points: 128
Z1: 29m
Z2: 44m
Z3: 18m
Z4: 21m
Z5: 1m
Z6: 7m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="600" Power="1.0" Cadence="90"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="180" Power="0.65" Cadence="90"/>
  <IntervalsT Repeat="4" OnDuration="60" OffDuration="60" OnPower="0.65" OffPower="0.65" Cadence="100" CadenceResting="70"/>
  <SteadyState Duration="120" Power="0.65" Cadence="90"/>
  <IntervalsT Repeat="6" OnDuration="20" OffDuration="180" OnPower="1.2" OffPower="0.77" CadenceResting="90" Cadence="110"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="180" Power="0.65" Cadence="90"/>
  <IntervalsT Repeat="4" OnDuration="60" OffDuration="60" OnPower="0.65" OffPower="0.65" Cadence="100" CadenceResting="70"/>
  <SteadyState Duration="120" Power="0.65" Cadence="90"/>
  <IntervalsT Repeat="5" OnDuration="60" OffDuration="120" OnPower="1.2" OffPower="0.55" Cadence="100" CadenceResting="85"/>
  <SteadyState Duration="900" Power="0.65" Cadence="90"/>
  <SteadyState Duration="600" Power="1.0" Cadence="90"/>
  <Cooldown Duration="300" PowerLow="0.6" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #34 Hang Ten</name>
 <description>Build Me Up: Week 8:  Hang Ten
Intervals that look like a wave. Surfs Up! "Hang ten, brotha!"
Stress points: 65
Z1: 10m
Z2: 15m
Z3: 20m
Z4: 10m
Z5: 5m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.25" PowerHigh="0.6" />
  <SteadyState Duration="300" Power="0.6" />
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="120" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="1.1" Cadence="90"/>
  <SteadyState Duration="120" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="120" Power="0.6" Cadence="85"/>
  <SteadyState Duration="60" Power="0.95" Cadence="60"/>
  <SteadyState Duration="120" Power="0.8" Cadence="60"/>
  <SteadyState Duration="60" Power="1.1" Cadence="60"/>
  <SteadyState Duration="120" Power="0.8" Cadence="60"/>
  <SteadyState Duration="60" Power="0.95" Cadence="60"/>
  <SteadyState Duration="120" Power="0.6" Cadence="85"/>
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="120" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="1.1" Cadence="90"/>
  <SteadyState Duration="120" Power="0.8" Cadence="90"/>
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="120" Power="0.6" Cadence="85"/>
  <SteadyState Duration="60" Power="0.95" Cadence="60"/>
  <SteadyState Duration="120" Power="0.8" Cadence="60"/>
  <SteadyState Duration="60" Power="1.1" Cadence="60"/>
  <SteadyState Duration="120" Power="0.8" Cadence="60"/>
  <SteadyState Duration="60" Power="0.95" Cadence="60"/>
  <SteadyState Duration="120" Power="0.6" Cadence="85"/>
  <SteadyState Duration="60" Power="0.95" Cadence="100"/>
  <SteadyState Duration="120" Power="0.8" />
  <SteadyState Duration="60" Power="1.1" Cadence="110"/>
  <SteadyState Duration="120" Power="0.8" />
  <SteadyState Duration="60" Power="0.95" Cadence="90"/>
  <SteadyState Duration="120" Power="0.6" Cadence="85"/>
  <Cooldown Duration="300" PowerLow="0.6" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #35 Pedaling Drills</name>
 <description>Build Me Up: Week 8:  Pedaling Drills
We are working on your pedaling mechanics and basic skills here. These drills will help make you a more efficient rider, pedal with less wasted energy, and gain some "free" speed as you will be better able to put power through the entire pedal stroke instead of just the push down and pull up phases as most riders do. Imagine pedaling in circles rather than having 2 pistons for legs.
Stress points: 24
Z1: 14m
Z2: 4m
Z3: 11m
Z4: 1m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.85" Cadence="95"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="0.95" Cadence="105"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="110"/>
  <SteadyState Duration="150" Power="0.5" Cadence="85"/>
  <FreeRide Duration="600" FlatRoad="0"/>/>
  <Cooldown Duration="300" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #36 Circus</name>
 <description>Build Me Up: Week 9:  Circus
Focused sets of microbursts that are seemingly random in terms of intensity.  Mostly named for this definition of the word, "circus" - "a public scene of frenetic and noisily intrusive activity." That seemed fitting...
Stress points: 78
Z1: 41m
Z2: 3m
Z3: -
Z4: 1m
Z5: 1m
Z6: 15m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.95" Cadence="95"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="105"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.15" Cadence="115"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="1" OnDuration="15" OffDuration="15" OnPower="2.0" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <IntervalsT Repeat="18" OnDuration="15" OffDuration="15" OnPower="1.5" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <IntervalsT Repeat="1" OnDuration="15" OffDuration="15" OnPower="2.0" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <SteadyState Duration="300" Power="0.5" Cadence="90"/>
  <IntervalsT Repeat="4" OnDuration="15" OffDuration="15" OnPower="1.8" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <IntervalsT Repeat="6" OnDuration="15" OffDuration="15" OnPower="1.6" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <IntervalsT Repeat="6" OnDuration="15" OffDuration="15" OnPower="1.4" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <IntervalsT Repeat="4" OnDuration="15" OffDuration="15" OnPower="1.2" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <SteadyState Duration="300" Power="0.5" Cadence="90"/>
  <IntervalsT Repeat="2" OnDuration="15" OffDuration="15" OnPower="2.0" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <IntervalsT Repeat="2" OnDuration="15" OffDuration="15" OnPower="1.2" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <IntervalsT Repeat="6" OnDuration="15" OffDuration="15" OnPower="1.5" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <IntervalsT Repeat="2" OnDuration="15" OffDuration="15" OnPower="1.2" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <IntervalsT Repeat="2" OnDuration="15" OffDuration="15" OnPower="2.0" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <IntervalsT Repeat="6" OnDuration="15" OffDuration="15" OnPower="1.5" OffPower="0.5" Cadence="100" CadenceResting="90"/>
  <Cooldown Duration="300" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #37 Malevolent</name>
 <description>Build Me Up: Week 9:  Malevolent
This workout involves decreasing interval lengths at Z4 (90%) with a surge at Z5 (115%) for 1 minute at the end of each rep.  So, this will start off moderate, become hard, then down-right nasty - you might even say, "Malevolent" - by the end!
Stress points: 79
Z1: 14m
Z2: 3m
Z3: -
Z4: 35m
Z5: 8m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.95" Cadence="95"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="105"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.15" Cadence="115"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="900" Power="0.9" Cadence="90"/>
  <SteadyState Duration="60" Power="1.15" Cadence="110"/>
  <SteadyState Duration="600" Power="0.9" Cadence="90"/>
  <SteadyState Duration="60" Power="1.15" Cadence="110"/>
  <SteadyState Duration="300" Power="0.9" Cadence="90"/>
  <SteadyState Duration="60" Power="1.15" Cadence="110"/>
  <SteadyState Duration="150" Power="0.9" Cadence="90"/>
  <SteadyState Duration="60" Power="1.15" Cadence="110"/>
  <SteadyState Duration="60" Power="0.9" Cadence="90"/>
  <SteadyState Duration="60" Power="1.15" Cadence="110"/>
  <SteadyState Duration="30" Power="0.9" Cadence="90"/>
  <SteadyState Duration="60" Power="1.15" Cadence="110"/>
  <SteadyState Duration="15" Power="0.9" Cadence="90"/>
  <SteadyState Duration="60" Power="1.15" Cadence="110"/>
  <Cooldown Duration="225" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #38 Melange</name>
 <description>Build Me Up: Week 9:  Melange
Featuring a blend of work across a range of zones, this is a potent cocktail designed to boost your fitness.
Stress points: 87
Z1: 29m
Z2: 35m
Z3: 10m
Z4: 13m
Z5: 1m
Z6: 3m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.25" PowerHigh="0.55" />
  <SteadyState Duration="300" Power="0.55" Cadence="95"/>
  <SteadyState Duration="300" Power="0.65" Cadence="100"/>
  <SteadyState Duration="30" Power="0.9" Cadence="100"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="30" Power="1.0" Cadence="105"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="30" Power="1.1" Cadence="110"/>
  <SteadyState Duration="60" Power="0.55" />
  <SteadyState Duration="150" Power="0.55" Cadence="85"/>
  <SteadyState Duration="600" Power="0.85" Cadence="75"/>
  <SteadyState Duration="600" Power="0.65" Cadence="90"/>
  <IntervalsT Repeat="6" OnDuration="120" OffDuration="60" OnPower="1.0" OffPower="0.55" Cadence="100" CadenceResting="85"/>
  <SteadyState Duration="600" Power="0.65" Cadence="90"/>
  <IntervalsT Repeat="8" OnDuration="20" OffDuration="40" OnPower="1.3" OffPower="0.55" Cadence="110" CadenceResting="85"/>
  <SteadyState Duration="600" Power="0.65" Cadence="90"/>
  <Cooldown Duration="120" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #39 Mosaic</name>
 <description>Build Me Up: Week 9:  Mosaic
Bit by bit and piece by piece, you are building a picture of a complete athlete with the fitness to tackle any challenge. Take another step towards completing your Mosaic today.
Stress points: 146
Z1: 23m
Z2: 29m
Z3: 31m
Z4: 17m
Z5: 16m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.8" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.9" OffPower="0.55" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.0" OffPower="0.55" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.1" OffPower="0.55" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="180" OffDuration="180" OnPower="1.15" OffPower="0.65" Cadence="100" CadenceResting="85"/>
  <SteadyState Duration="300" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="10" OnDuration="60" OffDuration="60" OnPower="1.0" OffPower="0.75" Cadence="95" CadenceResting="65"/>
  <SteadyState Duration="300" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="1" OnDuration="60" OffDuration="300" OnPower="1.0" OffPower="0.85" CadenceResting="90" Cadence="105"/>
  <IntervalsT Repeat="1" OnDuration="60" OffDuration="300" OnPower="1.0" OffPower="0.85" CadenceResting="80" Cadence="95"/>
  <IntervalsT Repeat="1" OnDuration="60" OffDuration="300" OnPower="1.0" OffPower="0.85" CadenceResting="70" Cadence="85"/>
  <SteadyState Duration="60" Power="0.85" Cadence="85"/>
  <SteadyState Duration="60" Power="0.85" Cadence="60"/>
  <SteadyState Duration="60" Power="0.85" Cadence="85"/>
  <SteadyState Duration="60" Power="0.85" Cadence="60"/>
  <SteadyState Duration="60" Power="0.85" Cadence="85"/>
  <SteadyState Duration="60" Power="1.0" Cadence="100"/>
  <IntervalsT Repeat="1" OnDuration="60" OffDuration="300" OnPower="1.0" OffPower="0.85" CadenceResting="80" Cadence="95"/>
  <IntervalsT Repeat="1" OnDuration="60" OffDuration="300" OnPower="1.0" OffPower="0.85" CadenceResting="90" Cadence="105"/>
  <Cooldown Duration="240" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #40 Baffling Beau</name>
 <description>Build Me Up: Week 10:  Baffling Beau
This workout was developed around Valentine's Day and is a special present for a special someone... YOU! The workout is almost bafflingly challenging at times, hence the name. Will it be your sweetheart? Or leave you wondering what just happened? Only one way to find out...
Stress points: 73
Z1: 30m
Z2: 13m
Z3: -
Z4: 1m
Z5: 1m
Z6: 15m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.95" Cadence="95"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="105"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.15" Cadence="115"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="10" OnDuration="40" OffDuration="20" OnPower="1.2" OffPower="0.55" Cadence="110" CadenceResting="85"/>
  <SteadyState Duration="300" Power="0.65" Cadence="85"/>
  <IntervalsT Repeat="10" OnDuration="30" OffDuration="30" OnPower="1.3" OffPower="0.55" Cadence="110" CadenceResting="85"/>
  <SteadyState Duration="300" Power="0.65" Cadence="85"/>
  <IntervalsT Repeat="10" OnDuration="20" OffDuration="40" OnPower="1.4" OffPower="0.55" Cadence="110" CadenceResting="85"/>
  <Cooldown Duration="300" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #41 Exemplar</name>
 <description>Build Me Up: Week 10:  Exemplar
One of the most challenging workouts in the plan, this is designed to help you achieve your best - the Exemplary version of yourself!
Stress points: 72
Z1: 8m
Z2: 9m
Z3: 17m
Z4: 26m
Z5: -
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.4" PowerHigh="0.65" />
  <SteadyState Duration="300" Power="0.65" Cadence="95"/>
  <SteadyState Duration="180" Power="0.8" Cadence="100"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="2" OnDuration="480" OffDuration="120" OnPower="0.93" OffPower="0.88" Cadence="75" CadenceResting="100"/>
  <SteadyState Duration="180" Power="0.65" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="120" OffDuration="120" OnPower="0.93" OffPower="0.88" Cadence="90" CadenceResting="70"/>
  <SteadyState Duration="120" Power="0.45" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #42 Exigent</name>
 <description>Build Me Up: Week 10:  Exigent
The Exigent demands of this workout will push you to be your very best. One of the hardest workouts in this plan, this will push you, challenge you, and ask you to exceed your own expectations.
Stress points: 111
Z1: 18m
Z2: 17m
Z3: 30m
Z4: 21m
Z5: 5m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.95" Cadence="95"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="105"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.15" Cadence="115"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="300" Power="1.03" Cadence="90"/>
  <SteadyState Duration="120" Power="0.65" Cadence="85"/>
  <SteadyState Duration="60" Power="1.15" Cadence="105"/>
  <SteadyState Duration="120" Power="0.65" Cadence="85"/>
  <SteadyState Duration="300" Power="1.03" Cadence="90"/>
  <SteadyState Duration="120" Power="0.65" Cadence="85"/>
  <SteadyState Duration="60" Power="1.15" Cadence="105"/>
  <SteadyState Duration="120" Power="0.65" Cadence="85"/>
  <SteadyState Duration="300" Power="1.03" Cadence="90"/>
  <SteadyState Duration="120" Power="0.65" Cadence="85"/>
  <SteadyState Duration="60" Power="1.15" Cadence="105"/>
  <SteadyState Duration="120" Power="0.65" Cadence="85"/>
  <SteadyState Duration="300" Power="1.03" Cadence="90"/>
  <SteadyState Duration="120" Power="0.65" Cadence="85"/>
  <SteadyState Duration="60" Power="1.15" Cadence="105"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <SteadyState Duration="180" Power="0.85" Cadence="100"/>
  <SteadyState Duration="60" Power="0.85" Cadence="70"/>
  <SteadyState Duration="180" Power="0.85" Cadence="100"/>
  <SteadyState Duration="60" Power="0.85" Cadence="70"/>
  <SteadyState Duration="180" Power="0.85" Cadence="100"/>
  <SteadyState Duration="60" Power="0.85" Cadence="70"/>
  <SteadyState Duration="180" Power="0.85" Cadence="100"/>
  <SteadyState Duration="180" Power="0.55" Cadence="85"/>
  <SteadyState Duration="900" Power="0.85" Cadence="90"/>
  <Cooldown Duration="120" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #43 Potpourri</name>
 <description>Build Me Up: Week 10:  Potpourri
You may not smell great after working your way through the variety of intervals in this workout, but you will be more fit!
Stress points: 64
Z1: 19m
Z2: 4m
Z3: 30m
Z4: 7m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="60" OffDuration="60" OnPower="0.88" OffPower="0.88" Cadence="100" CadenceResting="60"/>
  <SteadyState Duration="180" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="3" OnDuration="120" OffDuration="180" OnPower="0.94" OffPower="0.86" Cadence="90" CadenceResting="90"/>
  <SteadyState Duration="180" Power="0.55" Cadence="85"/>
  <Warmup Duration="720" PowerLow="0.75" PowerHigh="0.9" />
  <SteadyState Duration="120" Power="0.5" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #44 Serrated</name>
 <description>Build Me Up: Week 10:  Serrated
Intervals that come up to a very sharp point, looking like a serrated knife upon post-workout review. This workout will make you sharp for race day, ready to tackle the surges of terrain and competition.
Stress points: 121
Z1: 28m
Z2: 6m
Z3: 33m
Z4: 10m
Z5: 5m
Z6: 8m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.4" PowerHigh="0.65" />
  <SteadyState Duration="300" Power="0.65" Cadence="95"/>
  <SteadyState Duration="180" Power="0.8" Cadence="100"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <Warmup Duration="120" PowerLow="1.1" PowerHigh="1.3" />
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <Warmup Duration="120" PowerLow="1.1" PowerHigh="1.3" />
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <Warmup Duration="120" PowerLow="1.1" PowerHigh="1.3" />
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <Warmup Duration="120" PowerLow="1.1" PowerHigh="1.3" />
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <Warmup Duration="120" PowerLow="1.1" PowerHigh="1.3" />
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <Warmup Duration="120" PowerLow="1.1" PowerHigh="1.3" />
  <SteadyState Duration="480" Power="0.55" Cadence="85"/>
  <Warmup Duration="30" PowerLow="1.3" PowerHigh="1.5" />
  <IntervalsT Repeat="5" OnDuration="60" OffDuration="180" OnPower="1.0" OffPower="0.88" CadenceResting="90" Cadence="90"/>
  <Warmup Duration="30" PowerLow="1.3" PowerHigh="1.5" />
  <IntervalsT Repeat="5" OnDuration="60" OffDuration="180" OnPower="1.0" OffPower="0.88" CadenceResting="90" Cadence="90"/>
  <SteadyState Duration="240" Power="0.45" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #45 Aspire</name>
 <description>Build Me Up: Week 11:  Aspire
One of the hardest workouts in this plan, the workload here is designed to give you something to ASPIRE to! What do you think is possible? And what actually is? This workout is designed to show you that you are stronger than you may believe!
Stress points: 151
Z1: 40m
Z2: 7m
Z3: 40m
Z4: 3m
Z5: 31m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.25" PowerHigh="0.65" />
  <SteadyState Duration="300" Power="0.65" Cadence="95"/>
  <SteadyState Duration="60" Power="0.8" Cadence="100"/>
  <SteadyState Duration="60" Power="0.75" Cadence="100"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="60" Power="0.9" Cadence="105"/>
  <SteadyState Duration="60" Power="0.85" Cadence="105"/>
  <SteadyState Duration="60" Power="0.55" />
  <SteadyState Duration="60" Power="1.0" Cadence="110"/>
  <SteadyState Duration="60" Power="0.95" Cadence="110"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="30" Power="1.08" Cadence="110"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="30" Power="1.15" Cadence="115"/>
  <SteadyState Duration="60" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="120" OffDuration="120" OnPower="1.05" OffPower="0.88" Cadence="100" CadenceResting="85"/>
  <SteadyState Duration="300" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="90" OffDuration="150" OnPower="1.05" OffPower="0.88" Cadence="100" CadenceResting="85"/>
  <SteadyState Duration="300" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="5" OnDuration="60" OffDuration="180" OnPower="1.05" OffPower="0.88" Cadence="70" CadenceResting="90"/>
  <SteadyState Duration="300" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="7" OnDuration="60" OffDuration="60" OnPower="1.15" OffPower="0.55" Cadence="100" CadenceResting="85"/>
  <Cooldown Duration="360" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #46 Breakfast Returns</name>
 <description>Build Me Up: Week 11:  Breakfast Returns
A block of 30s/30s intervals that an athlete once told me (who worked out early in the morning and usually right after breakfast) always caused his "breakfast to return." Even if your breakfast - or lunch or dinner - stays put, one thing will certainly rise - your fitness!
Stress points: 81
Z1: 26m
Z2: 18m
Z3: -
Z4: 1m
Z5: 1m
Z6: 15m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="0.95" OffPower="0.5" Cadence="95" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.05" OffPower="0.5" Cadence="105" CadenceResting="85"/>
  <IntervalsT Repeat="1" OnDuration="30" OffDuration="30" OnPower="1.15" OffPower="0.5" Cadence="115" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <IntervalsT Repeat="10" OnDuration="30" OffDuration="30" OnPower="1.3" OffPower="0.7" Cadence="105" CadenceResting="90"/>
  <SteadyState Duration="180" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="10" OnDuration="30" OffDuration="30" OnPower="1.3" OffPower="0.7" Cadence="105" CadenceResting="90"/>
  <SteadyState Duration="180" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="10" OnDuration="30" OffDuration="30" OnPower="1.3" OffPower="0.7" Cadence="105" CadenceResting="90"/>
  <SteadyState Duration="180" Power="0.55" Cadence="85"/>
  <Cooldown Duration="360" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #47 Ruckus</name>
 <description>Build Me Up: Week 11:  Ruckus
Stand up and make some noise... Or power! A mix of standing and sitting intervals that are designed to help you speak loudly without saying a word!
Stress points: 74
Z1: 11m
Z2: 20m
Z3: 3m
Z4: 26m
Z5: -
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.4" PowerHigh="0.65" />
  <SteadyState Duration="300" Power="0.65" Cadence="95"/>
  <SteadyState Duration="180" Power="0.8" Cadence="100"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="7" OnDuration="120" OffDuration="60" OnPower="1.0" OffPower="0.75" Cadence="90" CadenceResting="70"/>
  <SteadyState Duration="180" Power="0.55" />
  <IntervalsT Repeat="6" OnDuration="120" OffDuration="60" OnPower="1.0" OffPower="0.75" Cadence="90" CadenceResting="70"/>
  <Cooldown Duration="180" PowerLow="0.74" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #48 Tenacity</name>
 <description>Build Me Up: Week 11:  Tenacity
This workout will ask a lot of you. But you didn't get to this point without a lot of Tenacity. So let that fitness shine through today.
Stress points: 135
Z1: 39m
Z2: 7m
Z3: 1h 2m
Z4: 3m
Z5: 8m
Z6: 1m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.25" PowerHigh="0.65" />
  <SteadyState Duration="300" Power="0.65" Cadence="95"/>
  <SteadyState Duration="60" Power="0.75" Cadence="100"/>
  <SteadyState Duration="60" Power="0.8" Cadence="100"/>
  <SteadyState Duration="30" Power="0.55" Cadence="85"/>
  <SteadyState Duration="60" Power="0.85" Cadence="105"/>
  <SteadyState Duration="60" Power="0.9" Cadence="105"/>
  <SteadyState Duration="30" Power="0.55" Cadence="85"/>
  <SteadyState Duration="60" Power="0.95" Cadence="110"/>
  <SteadyState Duration="60" Power="1.0" Cadence="110"/>
  <SteadyState Duration="180" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="6" OnDuration="5" OffDuration="300" OnPower="2.0" OffPower="0.85" CadenceResting="90" Cadence="110"/>
  <SteadyState Duration="360" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="6" OnDuration="5" OffDuration="300" OnPower="2.0" OffPower="0.85" CadenceResting="90" Cadence="110"/>
  <SteadyState Duration="360" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="4" OnDuration="60" OffDuration="60" OnPower="1.15" OffPower="0.55" Cadence="100" CadenceResting="85"/>
  <SteadyState Duration="120" Power="0.4" Cadence="85"/>
  <IntervalsT Repeat="4" OnDuration="60" OffDuration="60" OnPower="1.15" OffPower="0.55" Cadence="100" CadenceResting="85"/>
  <Cooldown Duration="540" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #49 Thew</name>
 <description>Build Me Up: Week 11:  Thew
A hard workout that requires a lot of "strength" both physically and mentally to accomplish. Thew, in case you didn't know it, is a fancy word meaning, "muscular strength." You learned something new and got more fit. Hard to beat that!
Stress points: 81
Z1: 19m
Z2: 21m
Z3: -
Z4: 1m
Z5: 14m
Z6: 5m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.25" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.95" Cadence="95"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="105"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.15" Cadence="115"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="0.5" Cadence="85"/>
  <Warmup Duration="60" PowerLow="1.15" PowerHigh="1.4" />
  <SteadyState Duration="60" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="1.15" Cadence="100"/>
  <SteadyState Duration="180" Power="0.65" Cadence="85"/>
  <Warmup Duration="60" PowerLow="1.15" PowerHigh="1.4" />
  <SteadyState Duration="60" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="1.15" Cadence="100"/>
  <SteadyState Duration="180" Power="0.65" Cadence="85"/>
  <Warmup Duration="60" PowerLow="1.15" PowerHigh="1.4" />
  <SteadyState Duration="60" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="1.15" Cadence="100"/>
  <SteadyState Duration="180" Power="0.65" Cadence="85"/>
  <Warmup Duration="60" PowerLow="1.15" PowerHigh="1.4" />
  <SteadyState Duration="60" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="1.15" Cadence="100"/>
  <SteadyState Duration="180" Power="0.65" Cadence="85"/>
  <Warmup Duration="60" PowerLow="1.15" PowerHigh="1.4" />
  <SteadyState Duration="60" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="1.15" Cadence="100"/>
  <SteadyState Duration="180" Power="0.65" Cadence="85"/>
  <Warmup Duration="60" PowerLow="1.15" PowerHigh="1.4" />
  <SteadyState Duration="60" Power="0.5" Cadence="85"/>
  <SteadyState Duration="120" Power="1.15" Cadence="100"/>
  <SteadyState Duration="180" Power="0.65" Cadence="85"/>
  <Cooldown Duration="180" PowerLow="0.65" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #50 Alpha</name>
 <description>Build Me Up: Week 12:  Alpha
This workout features a series of Leg Openers to prime the pump for a big effort. Enjoy this short and sharp workout designed to get you ready. Who's the "Alpha" after those past weeks of training now? YOU!
Stress points: 29
Z1: 17m
Z2: 4m
Z3: 4m
Z4: -
Z5: 4m
Z6: 1m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <SteadyState Duration="240" Power="0.4" Cadence="80"/>
  <SteadyState Duration="240" Power="0.53" Cadence="90"/>
  <SteadyState Duration="240" Power="0.67" Cadence="100"/>
  <SteadyState Duration="240" Power="0.8" Cadence="110"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="180" Power="1.05" Cadence="100"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <SteadyState Duration="60" Power="1.15" Cadence="110"/>
  <SteadyState Duration="120" Power="0.55" Cadence="85"/>
  <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="1.2" OffPower="0.55" Cadence="110" CadenceResting="85"/>
  <Cooldown Duration="120" PowerLow="0.55" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #51 FTP Test</name>
 <description>Build Me Up: Week 12:  FTP Test
The standard FTP test starts off with a long easy warmup, a few ramps, and a 5 minute effort to get the legs pumping.  After that it's time to give it your all - and go as hard as you can for 20 solid minutes.  Pace yourself and try to go as hard as you can sustain for the entire 20 minutes - you will be scored on the final 20 minute segment.  Upon saving your ride, you will be notified if your FTP improved.
Stress points: 70
Z1: 30m
Z2: 15m
Z3: 21m
Z4: 1m
Z5: 6m
Z6: 1m
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="1200" PowerLow="0.3" PowerHigh="0.7" />
  <SteadyState Duration="20" Power="0.9" />
  <SteadyState Duration="20" Power="1.1" />
  <SteadyState Duration="20" Power="1.3" />
  <SteadyState Duration="20" Power="0.9" />
  <SteadyState Duration="20" Power="1.1" />
  <SteadyState Duration="20" Power="1.3" />
  <SteadyState Duration="20" Power="0.9" />
  <SteadyState Duration="20" Power="1.1" />
  <SteadyState Duration="20" Power="1.3" />
  <SteadyState Duration="300" Power="0.6" />
  <SteadyState Duration="300" Power="1.1" />
  <SteadyState Duration="600" Power="0.6" />
  <FreeRide Duration="1200" FlatRoad="0"/>/>
  <Cooldown Duration="600" PowerLow="0.7" PowerHigh="0.3" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #52 Pedaling Drills</name>
 <description>Build Me Up: Week 12:  Pedaling Drills
We are working on your pedaling mechanics and basic skills here. These drills will help make you a more efficient rider, pedal with less wasted energy, and gain some "free" speed as you will be better able to put power through the entire pedal stroke instead of just the push down and pull up phases as most riders do. Imagine pedaling in circles rather than having 2 pistons for legs.
Stress points: 24
Z1: 14m
Z2: 4m
Z3: 11m
Z4: 1m
Z5: 1m
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="600" PowerLow="0.4" PowerHigh="0.75" />
  <SteadyState Duration="30" Power="0.85" Cadence="95"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="0.95" Cadence="105"/>
  <SteadyState Duration="30" Power="0.5" Cadence="85"/>
  <SteadyState Duration="30" Power="1.05" Cadence="110"/>
  <SteadyState Duration="150" Power="0.5" Cadence="85"/>
  <FreeRide Duration="600" FlatRoad="0"/>/>
  <Cooldown Duration="300" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,
`<workout_file>
 <author>N.N.</author>
 <name>BMU #53 Renewal</name>
 <description>Build Me Up: Week 12:  Renewal
Recovery. Regeneration. Renewal. It is just as important at the hard stuff. Fast cadence efforts facilitate flushing the legs without fatiguing them. Today is an active recovery day, NO HARD EFFORTS!
Stress points: 13
Z1: 24m
Z2: 6m
Z3: -
Z4: -
Z5: -
Z6: -
</description>
 <sportType>bike</sportType>
 <tags><tag name="FTP"/></tags>
 <workout>
  <Warmup Duration="300" PowerLow="0.25" PowerHigh="0.5" />
  <SteadyState Duration="300" Power="0.5" Cadence="95"/>
  <SteadyState Duration="60" Power="0.6" Cadence="100"/>
  <Warmup Duration="30" PowerLow="0.6" PowerHigh="0.7" />
  <SteadyState Duration="300" Power="0.5" Cadence="95"/>
  <SteadyState Duration="60" Power="0.6" Cadence="100"/>
  <Warmup Duration="30" PowerLow="0.6" PowerHigh="0.7" />
  <SteadyState Duration="240" Power="0.5" Cadence="95"/>
  <SteadyState Duration="60" Power="0.6" Cadence="100"/>
  <Warmup Duration="30" PowerLow="0.6" PowerHigh="0.7" />
  <SteadyState Duration="180" Power="0.5" Cadence="95"/>
  <SteadyState Duration="60" Power="0.6" Cadence="100"/>
  <Warmup Duration="30" PowerLow="0.6" PowerHigh="0.7" />
  <Cooldown Duration="120" PowerLow="0.5" PowerHigh="0.25" />

 </workout>
</workout_file>
`
,



];

export { workouts };

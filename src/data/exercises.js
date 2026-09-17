export const muscleGroups = [
  { id: 'chest',     name: 'Chest',       icon: '🏋️', desc: 'Pectorals & Upper Body',       color: '#ef4444', tag: 'Push Day' },
  { id: 'biceps',    name: 'Biceps',      icon: '💪', desc: 'Arm Flexors',                   color: '#3b82f6', tag: 'Pull Day' },
  { id: 'triceps',   name: 'Triceps',     icon: '🦾', desc: 'Arm Extensors',                 color: '#8b5cf6', tag: 'Push Day' },
  { id: 'back',      name: 'Back',        icon: '🔙', desc: 'Lats, Traps & Rhomboids',       color: '#06b6d4', tag: 'Pull Day' },
  { id: 'shoulders', name: 'Shoulders',   icon: '🤸', desc: 'Deltoids & Rotator Cuff',       color: '#f97316', tag: 'Push Day' },
  { id: 'legs',      name: 'Legs',        icon: '🦵', desc: 'Quads, Hamstrings & Glutes',    color: '#10b981', tag: 'Leg Day'  },
  { id: 'abs',       name: 'Core & Abs',  icon: '⚡', desc: 'Abdominals & Obliques',         color: '#eab308', tag: 'Core Day' },
  { id: 'calves',    name: 'Calves',      icon: '🦶', desc: 'Gastrocnemius & Soleus',        color: '#ec4899', tag: 'Leg Day'  },
  { id: 'forearms',  name: 'Forearms',    icon: '🤜', desc: 'Flexors & Extensors',           color: '#a78bfa', tag: 'Arm Day'  },
  { id: 'glutes',    name: 'Glutes',      icon: '🍑', desc: 'Gluteus Maximus & Medius',      color: '#14b8a6', tag: 'Leg Day'  },
];

export const exercisesDB = {
  chest: [
    {
      name: 'Barbell Bench Press', difficulty: 'intermediate', sets: '4', reps: '8–10', rest: '90s', equipment: 'Barbell',
      desc: 'The king of chest exercises. Targets the pectoralis major with secondary involvement of the front deltoids and triceps.',
      steps: ['Lie flat on a bench, grip the barbell slightly wider than shoulder-width.','Unrack the bar and lower it slowly to your mid-chest.','Press the bar back up explosively without locking out.','Keep your feet flat, back slightly arched, and shoulder blades retracted.'],
      tip: 'Drive your feet into the floor and imagine "bending the bar" to activate your lats for a stronger press.'
    },
    {
      name: 'Incline Dumbbell Press', difficulty: 'intermediate', sets: '3', reps: '10–12', rest: '75s', equipment: 'Dumbbells',
      desc: 'Targets the upper chest (clavicular head) for a fuller, more sculpted look.',
      steps: ['Set the bench to 30–45° incline.','Hold a dumbbell in each hand at shoulder level, palms facing forward.','Press the dumbbells up and slightly inward, squeezing at the top.','Lower with control, keeping elbows at about 75°.'],
      tip: 'A 30° incline is optimal for upper chest activation without over-recruiting the front delts.'
    },
    {
      name: 'Cable Chest Fly', difficulty: 'beginner', sets: '3', reps: '12–15', rest: '60s', equipment: 'Cable Machine',
      desc: 'An isolation exercise that stretches and squeezes the pecs through a wide range of motion.',
      steps: ['Set cables at shoulder height, stand in the middle, one foot forward.','Hold one handle in each hand with palms facing each other.','Bring hands together in an arc, squeezing your chest at the centre.','Return slowly to the start, feeling a deep stretch in the pecs.'],
      tip: 'Focus on the squeeze at the midpoint, not the weight. Keep a slight bend in your elbows throughout.'
    },
    {
      name: 'Push-Ups', difficulty: 'beginner', sets: '4', reps: '15–20', rest: '60s', equipment: 'Bodyweight',
      desc: 'A versatile foundational exercise for building chest, shoulder and tricep strength anywhere.',
      steps: ['Start in a high plank with hands slightly wider than shoulder-width.','Lower your chest to just above the floor, elbows at 45°.','Push back up to full extension, squeezing the chest.','Keep your core braced and body in a straight line throughout.'],
      tip: 'Try wide-grip push-ups to shift more emphasis onto the outer pecs.'
    },
    {
      name: 'Decline Bench Press', difficulty: 'intermediate', sets: '3', reps: '8–10', rest: '90s', equipment: 'Barbell',
      desc: 'Emphasizes the lower portion of the pectorals for a complete chest development.',
      steps: ['Set bench to -15° to -30° decline, secure your feet.','Grip the barbell wider than shoulder-width.','Lower the bar to your lower chest, keeping control.','Press back up powerfully, contracting the lower pecs.'],
      tip: 'Decline presses often allow you to lift more weight — great for building raw strength.'
    },
    {
      name: 'Dumbbell Pullover', difficulty: 'intermediate', sets: '3', reps: '12', rest: '60s', equipment: 'Dumbbell',
      desc: 'Works the chest and lats simultaneously, expanding the ribcage and improving posture.',
      steps: ['Lie perpendicular on a bench, only upper back on the pad.','Hold one dumbbell with both hands above your chest.','Lower the dumbbell in an arc behind your head, feeling a stretch.','Pull back to starting position using your chest and lat muscles.'],
      tip: 'Keep your hips lower than the bench for maximum chest stretch.'
    },
    {
      name: 'Chest Dips', difficulty: 'advanced', sets: '3', reps: '8–12', rest: '90s', equipment: 'Dip Bars',
      desc: 'A compound movement targeting the lower chest with heavy loading for serious mass building.',
      steps: ['Grip the dip bars and lean forward at 30° to activate the chest.','Lower yourself until your upper arms are parallel to the floor.','Push back up explosively without fully locking the elbows.','Keep elbows flared slightly outward, not tucked in.'],
      tip: 'Add a dip belt for extra resistance once bodyweight becomes too easy.'
    },
    {
      name: 'Pec Deck Machine', difficulty: 'beginner', sets: '3', reps: '15', rest: '60s', equipment: 'Machine',
      desc: 'An isolation machine exercise ideal for mind-muscle connection and finishing the chest.',
      steps: ['Sit with your back flat against the pad, feet on the floor.','Place forearms against the padded levers.','Bring the levers together in front of you, squeezing hard.','Slowly return to the stretched position without releasing tension.'],
      tip: 'Hold the squeeze at the peak contraction for 2 seconds per rep.'
    },
  ],
  biceps: [
    {
      name: 'Barbell Curl', difficulty: 'beginner', sets: '4', reps: '8–10', rest: '75s', equipment: 'Barbell',
      desc: 'The most effective mass builder for the biceps, enabling heavy overload with both arms simultaneously.',
      steps: ['Stand with feet hip-width, grip barbell shoulder-width, palms facing up.','Keep upper arms pinned to your sides.','Curl the bar to shoulder level, squeezing at the top.','Lower slowly in 3 seconds, maintaining tension throughout.'],
      tip: 'Avoid swinging your torso. If you\'re swinging, the weight is too heavy.'
    },
    {
      name: 'Hammer Curl', difficulty: 'beginner', sets: '3', reps: '10–12', rest: '60s', equipment: 'Dumbbells',
      desc: 'Targets the brachialis and brachioradialis for thicker-looking arms from every angle.',
      steps: ['Hold dumbbells at your sides with a neutral (hammer) grip.','Curl one or both dumbbells up to shoulder height.','Keep palms facing your body throughout the movement.','Lower with control and repeat.'],
      tip: 'Perform alternating reps for better focus and mind-muscle connection.'
    },
    {
      name: 'Concentration Curl', difficulty: 'beginner', sets: '3', reps: '12–15', rest: '60s', equipment: 'Dumbbell',
      desc: 'Isolates the bicep peak and creates an intense contraction for maximum definition.',
      steps: ['Sit on a bench, legs wide, rest your elbow on your inner thigh.','Hold a dumbbell, arm fully extended.','Curl it up toward your shoulder, squeezing the bicep hard.','Lower fully and repeat, then switch arms.'],
      tip: 'Supinate (rotate) your wrist at the top for a stronger peak contraction.'
    },
    {
      name: 'Incline Dumbbell Curl', difficulty: 'intermediate', sets: '3', reps: '10–12', rest: '60s', equipment: 'Dumbbells',
      desc: 'The incline position creates a unique stretch on the long head, building the bicep peak.',
      steps: ['Set bench to 45–60° incline. Sit back with arms hanging freely.','Hold dumbbells with palms facing forward.','Curl up without moving your upper arm forward.','Squeeze at the top, then lower fully for a complete stretch.'],
      tip: 'The longer stretch at the bottom makes this one of the best peak-builders.'
    },
    {
      name: 'EZ Bar Curl', difficulty: 'beginner', sets: '3', reps: '10–12', rest: '60s', equipment: 'EZ Bar',
      desc: 'A wrist-friendly variation of the barbell curl that reduces forearm strain.',
      steps: ['Grip the angled part of the EZ bar, palms facing up-outward.','Stand upright, keep upper arms still.','Curl to chin height, squeeze, and lower slowly.','Full range of motion is key — don\'t stop halfway.'],
      tip: 'Great option if straight bar curls cause wrist discomfort.'
    },
    {
      name: 'Cable Curl', difficulty: 'beginner', sets: '3', reps: '12–15', rest: '60s', equipment: 'Cable Machine',
      desc: 'Provides constant tension throughout the entire movement, great for hypertrophy.',
      steps: ['Attach a straight bar to a low cable pulley.','Stand close to the machine, grip bar shoulder-width.','Curl up to shoulder height without moving your elbows.','Lower slowly against the cable resistance.'],
      tip: 'Cables maintain tension at the bottom where free weights don\'t — maximizes time under tension.'
    },
    {
      name: 'Chin-Ups', difficulty: 'advanced', sets: '3', reps: '6–10', rest: '90s', equipment: 'Pull-up Bar',
      desc: 'A compound bodyweight movement that builds serious bicep and back strength.',
      steps: ['Grip the bar shoulder-width, palms facing you (supinated).','Hang at full arm extension, core tight.','Pull yourself up until your chin clears the bar.','Lower with control to full extension.'],
      tip: 'Think "pull your elbows down to your hips" to engage more bicep than back.'
    },
  ],
  triceps: [
    {
      name: 'Close-Grip Bench Press', difficulty: 'intermediate', sets: '4', reps: '8–10', rest: '90s', equipment: 'Barbell',
      desc: 'The best mass-builder for the triceps, allowing heavy loading in a compound movement.',
      steps: ['Lie on a flat bench. Grip the barbell narrower than shoulder-width.','Lower the bar to your lower chest, elbows tucked in.','Press back up powerfully, focusing on tricep contraction.','Don\'t let your elbows flare out — keep them at 45°.'],
      tip: 'Go no narrower than fist-width — too narrow strains the wrists.'
    },
    {
      name: 'Skull Crushers', difficulty: 'intermediate', sets: '3', reps: '10–12', rest: '75s', equipment: 'EZ Bar',
      desc: 'An isolation movement targeting all three tricep heads with excellent stretch potential.',
      steps: ['Lie on a bench. Hold EZ bar or dumbbells above your forehead.','Keep upper arms vertical and perpendicular to the floor.','Lower the weight toward your forehead or just behind it.','Extend back to the start, squeezing the triceps.'],
      tip: 'Let the elbows drift slightly back during the lowering phase for a deeper stretch.'
    },
    {
      name: 'Tricep Pushdown', difficulty: 'beginner', sets: '3', reps: '12–15', rest: '60s', equipment: 'Cable Machine',
      desc: 'A staple isolation exercise for the lateral tricep head with constant cable tension.',
      steps: ['Attach a rope or bar to a high cable. Face the machine.','Grip the attachment, elbows pinned to your sides.','Push down fully until arms are straight, then squeeze.','Return to 90° and repeat.'],
      tip: 'Flare the rope outward at the bottom for maximum lateral head contraction.'
    },
    {
      name: 'Overhead Extension', difficulty: 'beginner', sets: '3', reps: '12–15', rest: '60s', equipment: 'Dumbbell',
      desc: 'Places the triceps in a fully stretched position, targeting the long head especially.',
      steps: ['Hold one dumbbell with both hands overhead, arms extended.','Lower the weight behind your head, bending only at the elbows.','Extend back up until arms are straight, squeezing the triceps.','Keep your upper arms close to your head throughout.'],
      tip: 'The overhead position puts the long head under maximum stretch — a key area for arm size.'
    },
    {
      name: 'Tricep Dips', difficulty: 'intermediate', sets: '3', reps: '10–15', rest: '75s', equipment: 'Parallel Bars',
      desc: 'A powerful compound movement for the triceps with the ability to load heavy.',
      steps: ['Grip parallel bars, arms extended. Keep torso upright.','Lower yourself by bending elbows to 90°.','Press back up to the starting position.','Avoid locking out elbows forcefully.'],
      tip: 'Keeping your body upright maximizes tricep activation over chest.'
    },
    {
      name: 'Diamond Push-Ups', difficulty: 'beginner', sets: '3', reps: '12–20', rest: '60s', equipment: 'Bodyweight',
      desc: 'A bodyweight exercise that concentrates effort on the triceps through a narrow hand position.',
      steps: ['Get into a push-up position. Place hands together under your chest forming a diamond shape.','Lower your chest toward your hands, keeping elbows close to your body.','Push back up to full arm extension.','Maintain a rigid plank body position throughout.'],
      tip: 'Can be done anywhere — perfect as a finisher or warm-up!'
    },
    {
      name: 'Single-Arm Pushdown', difficulty: 'beginner', sets: '3', reps: '12–15 each', rest: '60s', equipment: 'Cable Machine',
      desc: 'Unilateral training to correct strength imbalances and improve muscle symmetry.',
      steps: ['Attach a single handle to a high cable.','Grip with one hand, elbow tucked to side.','Push down until your arm is fully extended.','Slowly return to 90° and repeat, then switch.'],
      tip: 'One arm at a time lets you focus completely on the working tricep.'
    },
  ],
  back: [
    {
      name: 'Deadlift', difficulty: 'advanced', sets: '4', reps: '4–6', rest: '3min', equipment: 'Barbell',
      desc: 'The ultimate strength and back builder. Works the entire posterior chain.',
      steps: ['Stand with feet hip-width, bar over mid-foot.','Hinge at the hips, grip the bar just outside your legs.','Chest up, back flat, brace your core.','Drive through the floor, hips and shoulders rise together.','Lock out at the top with hips forward, then lower under control.'],
      tip: 'Think "push the floor away" rather than "pull the bar up" for better mechanics.'
    },
    {
      name: 'Pull-Ups', difficulty: 'intermediate', sets: '4', reps: '6–10', rest: '90s', equipment: 'Pull-up Bar',
      desc: 'The gold-standard back exercise for building lat width and overall pulling strength.',
      steps: ['Hang from a bar with overhand grip, shoulder-width apart.','Depress and retract your shoulder blades.','Pull until your chin is above the bar.','Lower with control to full arm extension.'],
      tip: 'Imagine pulling the bar down to your chest rather than pulling yourself up.'
    },
    {
      name: 'Barbell Row', difficulty: 'intermediate', sets: '4', reps: '8–10', rest: '90s', equipment: 'Barbell',
      desc: 'A mass-building compound movement for the entire back, especially the lats and rhomboids.',
      steps: ['Hinge forward until torso is roughly parallel to the floor.','Grip barbell overhand, slightly wider than shoulder-width.','Pull the bar into your lower ribcage, driving elbows back.','Lower with control, maintaining a flat back throughout.'],
      tip: 'Pause and squeeze the lats for 1 second at the top of each rep.'
    },
    {
      name: 'Lat Pulldown', difficulty: 'beginner', sets: '3', reps: '10–12', rest: '75s', equipment: 'Cable Machine',
      desc: 'An excellent exercise for beginners to develop lat strength before progressing to pull-ups.',
      steps: ['Sit at the machine, thighs under the pad, wide overhand grip.','Lean back slightly, pull the bar to your upper chest.','Squeeze your lats and shoulder blades together.','Control the bar back up to full arm extension.'],
      tip: 'Lean back just 15–20° — too much lean turns it into a row.'
    },
    {
      name: 'Seated Cable Row', difficulty: 'beginner', sets: '3', reps: '10–12', rest: '75s', equipment: 'Cable Machine',
      desc: 'A safe and effective way to target the mid-back, rhomboids and rear deltoids.',
      steps: ['Sit at the low cable, feet on the platform, slight knee bend.','Grip the close-grip attachment, arms extended.','Pull the handle to your lower sternum, elbows back.','Squeeze your shoulder blades together, then extend forward.'],
      tip: 'Avoid rounding your lower back when leaning forward on the eccentric.'
    },
    {
      name: 'Dumbbell Row', difficulty: 'beginner', sets: '3', reps: '10–12 each', rest: '60s', equipment: 'Dumbbell',
      desc: 'A unilateral exercise for correcting imbalances and building the lats through a large range of motion.',
      steps: ['Place one knee and hand on a bench for support.','Hold a dumbbell in the opposite hand, arm extended.','Pull the dumbbell up and back toward your hip.','Lower fully and repeat, then switch sides.'],
      tip: 'Let the dumbbell drop as low as comfortably possible for maximum lat stretch.'
    },
    {
      name: 'Face Pulls', difficulty: 'beginner', sets: '3', reps: '15–20', rest: '60s', equipment: 'Cable Machine',
      desc: 'Essential for rear delt and rotator cuff health, and improving posture.',
      steps: ['Set the cable at head height with a rope attachment.','Grip the rope with both hands, thumbs facing you.','Pull the rope to your face, separating the ends outward.','Hold briefly at the peak, then slowly release.'],
      tip: 'Include face pulls in every session — they balance pushing exercises and protect your shoulders.'
    },
    {
      name: 'Hyperextensions', difficulty: 'beginner', sets: '3', reps: '12–15', rest: '60s', equipment: 'GHD Machine',
      desc: 'Strengthens the lower back, glutes and hamstrings — critical for injury prevention.',
      steps: ['Position yourself on the GHD, hips at the top of the pad.','Cross arms over chest or hold a plate to add resistance.','Hinge at the hips, lowering until you feel a stretch.','Raise back to parallel — don\'t hyperextend at the top.'],
      tip: 'Squeeze your glutes at the top, not just your lower back.'
    },
  ],
  shoulders: [
    {
      name: 'Overhead Press', difficulty: 'intermediate', sets: '4', reps: '6–8', rest: '2min', equipment: 'Barbell',
      desc: 'The king of shoulder exercises. Builds all three deltoid heads with heavy compound loading.',
      steps: ['Stand with feet shoulder-width. Grip barbell just outside shoulder-width.','Hold at collarbone level, brace core tight.','Press the bar overhead, slightly back once past the forehead.','Lock out overhead, then lower under control.'],
      tip: 'Squeeze your glutes to protect your lower back during the press.'
    },
    {
      name: 'Lateral Raise', difficulty: 'beginner', sets: '4', reps: '12–15', rest: '60s', equipment: 'Dumbbells',
      desc: 'The primary exercise for building the medial deltoid and achieving that wide shoulder look.',
      steps: ['Stand holding dumbbells at your sides, slight elbow bend.','Raise both arms to shoulder height, leading with the elbows.','Tilt the front of the dumbbell slightly down.','Lower slowly over 3 seconds.'],
      tip: 'Use lighter weights and higher reps — this is a pure isolation move.'
    },
    {
      name: 'Arnold Press', difficulty: 'intermediate', sets: '3', reps: '10–12', rest: '75s', equipment: 'Dumbbells',
      desc: 'A full-range shoulder press that rotates through the movement to hit all three deltoid heads.',
      steps: ['Sit with dumbbells at chin level, palms facing you.','As you press up, rotate your wrists outward.','Finish with palms facing forward at the top.','Reverse the rotation as you lower back.'],
      tip: 'Named after Arnold Schwarzenegger — one of the best all-around shoulder exercises.'
    },
    {
      name: 'Front Raise', difficulty: 'beginner', sets: '3', reps: '12–15', rest: '60s', equipment: 'Dumbbells',
      desc: 'Isolates the anterior (front) deltoid for balanced shoulder development.',
      steps: ['Stand holding dumbbells in front of thighs, palms down.','Raise one or both arms to shoulder height.','Hold briefly at the top, then lower with control.','Alternate arms or do both simultaneously.'],
      tip: 'Most people already get plenty of front delt work from pressing — focus on laterals.'
    },
    {
      name: 'Rear Delt Fly', difficulty: 'beginner', sets: '3', reps: '15–20', rest: '60s', equipment: 'Dumbbells',
      desc: 'Targets the often-neglected rear deltoid — crucial for posture and shoulder balance.',
      steps: ['Hinge forward at the hips until torso is near parallel.','Hold dumbbells with arms hanging, slight elbow bend.','Raise both arms out to the sides, squeezing rear delts.','Lower with control and repeat.'],
      tip: 'Weak rear delts lead to shoulder injuries — never skip this muscle.'
    },
    {
      name: 'Upright Row', difficulty: 'intermediate', sets: '3', reps: '10–12', rest: '75s', equipment: 'Barbell',
      desc: 'Targets the side deltoids and traps for impressive shoulder width and mass.',
      steps: ['Grip barbell shoulder-width or slightly narrower, palms down.','Pull the bar straight up, leading with the elbows.','Bring the bar to chin level, elbows above the bar.','Lower slowly and with control.'],
      tip: 'Use a wider grip to reduce shoulder impingement risk.'
    },
    {
      name: 'Cable Lateral Raise', difficulty: 'beginner', sets: '3', reps: '12–15 each', rest: '60s', equipment: 'Cable Machine',
      desc: 'Maintains consistent tension throughout the movement, ideal for lat delt growth.',
      steps: ['Set cable to the lowest position. Stand sideways to the machine.','Hold the handle with the far hand, crossing your body.','Raise your arm up and out to shoulder height.','Lower slowly while keeping tension on the cable.'],
      tip: 'Cables work the lateral delt better than dumbbells due to constant tension.'
    },
  ],
  legs: [
    {
      name: 'Barbell Squat', difficulty: 'advanced', sets: '4', reps: '6–8', rest: '3min', equipment: 'Barbell',
      desc: 'The ultimate lower body compound exercise. Builds quads, hamstrings, glutes and core simultaneously.',
      steps: ['Bar rests on your upper traps. Feet shoulder-width, toes slightly out.','Take a deep breath in, brace your core and begin descent.','Lower until thighs are parallel to the floor (or below).','Drive through your heels to stand, exhaling at the top.'],
      tip: 'Keep your chest up and knees tracking over your toes throughout.'
    },
    {
      name: 'Romanian Deadlift', difficulty: 'intermediate', sets: '3', reps: '10–12', rest: '90s', equipment: 'Barbell',
      desc: 'The best hamstring exercise for muscle length and strength. Also activates glutes and lower back.',
      steps: ['Hold barbell at hip level, soft knee bend.','Hinge at the hips, sliding the bar down your thighs.','Lower until you feel a strong hamstring stretch.','Drive hips forward to return to standing.'],
      tip: 'Think about pushing your hips back, not bending forward.'
    },
    {
      name: 'Leg Press', difficulty: 'beginner', sets: '3', reps: '12–15', rest: '90s', equipment: 'Machine',
      desc: 'A safe machine alternative to squats for building quad size with reduced spinal load.',
      steps: ['Sit in the machine, feet on platform shoulder-width apart.','Lower the weight by bending knees to 90°.','Press back up without locking out your knees.','Control the descent at all times.'],
      tip: 'Higher foot placement targets glutes/hamstrings; lower placement targets quads.'
    },
    {
      name: 'Walking Lunges', difficulty: 'beginner', sets: '3', reps: '12–16 steps', rest: '75s', equipment: 'Bodyweight',
      desc: 'A dynamic movement that builds quad, hamstring and glute strength with great balance demand.',
      steps: ['Stand tall, step forward with one leg.','Lower your back knee toward the floor.','Push through the front heel to bring your back leg forward.','Repeat for the desired steps, alternating legs.'],
      tip: 'Take a long step for more glute activation; a shorter step for more quad.'
    },
    {
      name: 'Leg Extension', difficulty: 'beginner', sets: '3', reps: '15', rest: '60s', equipment: 'Machine',
      desc: 'An isolation exercise for the quadriceps, perfect for finishing and defining the front of the legs.',
      steps: ['Sit in the leg extension machine, pad resting on your shins.','Extend your legs fully, squeezing the quads hard at the top.','Hold briefly, then lower slowly with control.','Do not use momentum — this is a pure isolation move.'],
      tip: 'Toes pointed slightly inward can increase vastus medialis (inner quad) activation.'
    },
    {
      name: 'Leg Curl', difficulty: 'beginner', sets: '3', reps: '12–15', rest: '60s', equipment: 'Machine',
      desc: 'Isolates the hamstrings for size, strength and injury prevention.',
      steps: ['Lie face down on the machine, pad behind your ankles.','Curl your legs up toward your glutes.','Hold and squeeze the hamstrings at the top.','Lower slowly under full control.'],
      tip: 'Point your toes slightly to better isolate the biceps femoris (outer hamstring).'
    },
    {
      name: 'Bulgarian Split Squat', difficulty: 'advanced', sets: '3', reps: '8–10 each', rest: '90s', equipment: 'Dumbbells',
      desc: 'A brutal unilateral quad and glute builder that also demands balance and stability.',
      steps: ['Place your rear foot on a bench behind you.','Front foot forward, torso upright.','Lower your back knee toward the floor.','Drive through the front heel to rise.'],
      tip: 'Start light and master form first — this is famously one of the hardest leg exercises.'
    },
    {
      name: 'Box Jump', difficulty: 'intermediate', sets: '4', reps: '5–8', rest: '90s', equipment: 'Plyo Box',
      desc: 'A plyometric power exercise developing explosive leg strength and athleticism.',
      steps: ['Stand facing the box, feet hip-width.','Swing arms back, then explosively swing them forward as you jump.','Land softly on top of the box with bent knees.','Step down (never jump down) and reset.'],
      tip: 'Land as quietly as possible — this indicates proper deceleration and knee safety.'
    },
    {
      name: 'Sumo Deadlift', difficulty: 'advanced', sets: '4', reps: '5–8', rest: '3min', equipment: 'Barbell',
      desc: 'A wide-stance deadlift variation with more inner thigh and glute activation.',
      steps: ['Feet wider than shoulder-width, toes pointing significantly outward.','Grip bar inside your legs, keep chest tall.','Drive your knees out and push through the floor.','Lock out at the top, then hinge back down.'],
      tip: 'Great alternative for those who find conventional deadlifts strain their lower back.'
    },
  ],
  abs: [
    {
      name: 'Plank', difficulty: 'beginner', sets: '3', reps: '30–60s', rest: '45s', equipment: 'Bodyweight',
      desc: 'The foundational isometric core exercise for total-core stability and endurance.',
      steps: ['Forearms on the floor, elbows under shoulders.','Body in a straight line from head to heels.','Brace your abs, squeeze your glutes and hold.','Breathe steadily throughout.'],
      tip: 'Squeeze every muscle — abs, glutes, quads — for maximum core activation.'
    },
    {
      name: 'Cable Crunch', difficulty: 'beginner', sets: '3', reps: '15–20', rest: '60s', equipment: 'Cable Machine',
      desc: 'Allows progressive overload on the abs — the best way to build a thick, visible six-pack.',
      steps: ['Attach a rope to a high cable. Kneel facing the machine.','Hold the rope behind your head.','Crunch your elbows toward your knees, rounding the spine.','Return to start without releasing the cable tension.'],
      tip: 'Focus on flexing the spine, not pulling with your arms.'
    },
    {
      name: 'Hanging Leg Raise', difficulty: 'intermediate', sets: '3', reps: '10–15', rest: '60s', equipment: 'Pull-up Bar',
      desc: 'One of the most effective exercises for lower ab development.',
      steps: ['Hang from a pull-up bar with both hands, arms extended.','Keeping legs straight (or bent), raise them to hip level.','Hold briefly, then lower with control.','Avoid swinging momentum — slow and controlled.'],
      tip: 'Posterior pelvic tilt at the top increases lower ab engagement.'
    },
    {
      name: 'Russian Twist', difficulty: 'beginner', sets: '3', reps: '20 total', rest: '60s', equipment: 'Bodyweight',
      desc: 'Targets the obliques and rotational core strength, helping define the waist.',
      steps: ['Sit on the floor, knees bent, feet lifted slightly.','Lean back 45°, hold a weight or clasp hands.','Rotate your torso fully left, then right.','Keep the movement controlled — no swinging.'],
      tip: 'The heavier the weight and higher the speed, the greater the oblique recruitment.'
    },
    {
      name: 'Bicycle Crunch', difficulty: 'beginner', sets: '3', reps: '20 each side', rest: '45s', equipment: 'Bodyweight',
      desc: 'Studies show bicycle crunches are among the most effective ab exercises available.',
      steps: ['Lie on your back, hands behind your head, elbows wide.','Lift your head and shoulders off the floor.','Bring one knee to the opposite elbow while extending the other leg.','Alternate in a cycling motion, slow and controlled.'],
      tip: 'Slow it down — fast, sloppy reps reduce ab activation significantly.'
    },
    {
      name: 'Ab Wheel Rollout', difficulty: 'advanced', sets: '3', reps: '8–12', rest: '90s', equipment: 'Ab Wheel',
      desc: 'An advanced exercise demanding extreme core control and stability throughout the movement.',
      steps: ['Kneel on the floor, hold the ab wheel with both hands.','Slowly roll forward, extending your body toward the floor.','Go as far as you can while keeping your back flat.','Engage your core powerfully to roll back to start.'],
      tip: 'Start with small range of motion and build up over weeks.'
    },
    {
      name: 'Side Plank', difficulty: 'beginner', sets: '3', reps: '20–40s each', rest: '45s', equipment: 'Bodyweight',
      desc: 'Isolates the obliques and quadratus lumborum for a well-rounded, injury-resilient core.',
      steps: ['Lie on your side, forearm on the floor, elbow under shoulder.','Stack your feet or stagger them for stability.','Raise your hips off the floor to form a straight line.','Hold, then switch sides.'],
      tip: 'Add a hip dip (lower and lift the hip) to increase oblique intensity.'
    },
    {
      name: 'Dragon Flag', difficulty: 'advanced', sets: '3', reps: '5–8', rest: '90s', equipment: 'Bench',
      desc: 'Rocky Balboa\'s signature move — one of the hardest abdominal exercises for total core strength.',
      steps: ['Lie on a bench, grip the bench behind your head tightly.','Keeping your body rigid, raise your legs and torso off the bench.','Maintain a straight body from shoulders to feet.','Lower back down slowly — don\'t drop your hips.'],
      tip: 'Start with tuck dragon flags (knees bent) until you build sufficient strength.'
    },
  ],
  calves: [
    {
      name: 'Standing Calf Raise', difficulty: 'beginner', sets: '4', reps: '15–20', rest: '60s', equipment: 'Machine',
      desc: 'The primary exercise for the gastrocnemius (the visible, outer calf muscle).',
      steps: ['Stand with the balls of your feet on the edge of a step.','Lower heels below the step for a full stretch.','Rise up on your toes as high as possible.','Hold at the top for 1 second, then lower slowly.'],
      tip: 'Calves respond best to high reps with a full range of motion and a pause at the top.'
    },
    {
      name: 'Seated Calf Raise', difficulty: 'beginner', sets: '4', reps: '15–20', rest: '60s', equipment: 'Machine',
      desc: 'Targets the soleus (deeper calf muscle) which contributes significantly to calf thickness.',
      steps: ['Sit in the machine, pads resting on your lower thighs.','Let heels drop for a full stretch.','Push through the balls of your feet to rise.','Squeeze at the top for 1–2 seconds.'],
      tip: 'The seated position bends the knee, taking the gastrocnemius out of the movement.'
    },
    {
      name: 'Donkey Calf Raise', difficulty: 'beginner', sets: '3', reps: '15–20', rest: '60s', equipment: 'Machine',
      desc: 'A unique calf raise variation that works the calves through a different angle for complete development.',
      steps: ['Hinge at the hips at 90°, forearms resting on a support.','Balls of feet on a raised platform.','Rise up on your toes, squeeze, then lower fully.','Keep your back flat and core braced.'],
      tip: 'The bent-over position changes the pull angle for unique stretch — Arnold swore by this one.'
    },
    {
      name: 'Single-Leg Calf Raise', difficulty: 'intermediate', sets: '3', reps: '12–15 each', rest: '60s', equipment: 'Bodyweight',
      desc: 'Unilateral training for fixing size imbalances and building greater strength per leg.',
      steps: ['Stand on one foot on the edge of a step.','Lower heel fully, then rise up as high as possible.','Hold at the top, lower slowly.','Complete all reps, then switch legs.'],
      tip: 'Hold a dumbbell in the same-side hand for added resistance when bodyweight becomes easy.'
    },
    {
      name: 'Jump Rope', difficulty: 'beginner', sets: '3', reps: '2 min', rest: '60s', equipment: 'Jump Rope',
      desc: 'A full-body cardio exercise that also develops calf endurance and coordination.',
      steps: ['Hold rope handles at hip height, one in each hand.','Jump on the balls of your feet, keeping jumps small and quick.','Use your wrists to rotate the rope, not your whole arm.','Land softly and rhythmically.'],
      tip: 'Double-unders (rope passes twice per jump) intensify calf engagement significantly.'
    },
  ],
  forearms: [
    {
      name: 'Wrist Curl', difficulty: 'beginner', sets: '3', reps: '15–20', rest: '45s', equipment: 'Barbell',
      desc: 'Directly targets the forearm flexors for increased grip strength and forearm size.',
      steps: ['Sit on a bench, forearms resting on your thighs, wrists hanging off the knees.','Hold the barbell with palms facing up.','Curl your wrists upward as high as possible.','Lower fully and repeat.'],
      tip: 'Allow your fingers to unroll at the bottom for an even greater range of motion.'
    },
    {
      name: 'Reverse Wrist Curl', difficulty: 'beginner', sets: '3', reps: '15', rest: '45s', equipment: 'Barbell',
      desc: 'Targets the forearm extensors (often neglected) for balanced forearm development.',
      steps: ['Same position as wrist curls, but palms facing down.','Raise the back of your hands upward as high as possible.','Lower with control.','Focus on the top of the forearm contracting.'],
      tip: 'Forearm extensors are often 50% weaker than flexors — train them equally.'
    },
    {
      name: "Farmer's Walk", difficulty: 'intermediate', sets: '3', reps: '30–40m', rest: '90s', equipment: 'Dumbbells',
      desc: 'A loaded carry that brutally challenges grip strength, core stability and overall conditioning.',
      steps: ['Pick up heavy dumbbells on each side.','Stand tall, shoulders back, core tight.','Walk for the specified distance at a controlled pace.','Put the weights down safely.'],
      tip: 'One of the most functional exercises available — great for real-world strength.'
    },
    {
      name: 'Dead Hang', difficulty: 'beginner', sets: '3', reps: '20–45s', rest: '60s', equipment: 'Pull-up Bar',
      desc: 'A passive grip endurance exercise that also decompresses the spine.',
      steps: ['Jump up and grab a pull-up bar with both hands.','Let your body fully hang — don\'t bend your arms.','Breathe steadily and hold for the target time.','Drop down safely when done.'],
      tip: 'Progressively increase hang time each week. This directly translates to pull-up endurance.'
    },
    {
      name: 'Plate Pinch', difficulty: 'intermediate', sets: '3', reps: '20–30s', rest: '60s', equipment: 'Weight Plates',
      desc: 'Develops pinch grip strength — important for functional tasks and preventing forearm injuries.',
      steps: ['Hold two weight plates together with one hand, smooth side out.','Pinch the plates between your fingers and thumb.','Hold for the target time, then switch hands.','Increase weight as your pinch strength grows.'],
      tip: 'Start with two 10lb plates. Add a 5lb plate between them for more challenge.'
    },
  ],
  glutes: [
    {
      name: 'Hip Thrust', difficulty: 'intermediate', sets: '4', reps: '10–12', rest: '90s', equipment: 'Barbell',
      desc: 'The most effective exercise for glute hypertrophy. Research consistently shows it outperforms squats for glute activation.',
      steps: ['Rest your upper back against a bench, barbell over your hips.','Feet flat on the floor, shoulder-width, knees bent at 90°.','Drive through your heels, thrusting your hips toward the ceiling.','Squeeze glutes hard at the top, hold 1–2s, then lower.'],
      tip: 'Use a barbell pad for comfort. Drive with hips, not your lower back.'
    },
    {
      name: 'Glute Bridge', difficulty: 'beginner', sets: '3', reps: '15–20', rest: '60s', equipment: 'Bodyweight',
      desc: 'The beginner-friendly version of the hip thrust. Great for learning the hip hinge pattern.',
      steps: ['Lie on your back, knees bent, feet flat.','Drive through your heels to lift your hips toward the ceiling.','Squeeze your glutes hard at the top.','Lower slowly and repeat.'],
      tip: 'Can be done anywhere — great warm-up or finisher for glute activation.'
    },
    {
      name: 'Cable Kickback', difficulty: 'beginner', sets: '3', reps: '15 each', rest: '60s', equipment: 'Cable Machine',
      desc: 'An isolation exercise for the gluteus maximus through hip extension.',
      steps: ['Attach an ankle strap to the low cable.','Hold the machine for support, lean forward slightly.','Extend the leg backward and upward, squeezing the glute.','Lower with control and repeat, then switch.'],
      tip: 'Keep the movement at the hip, not the knee — it\'s a hip extension exercise.'
    },
    {
      name: 'Step-Ups', difficulty: 'beginner', sets: '3', reps: '12 each leg', rest: '60s', equipment: 'Box / Bench',
      desc: 'A functional unilateral exercise for the glutes, quads and balance.',
      steps: ['Stand in front of a box or bench.','Step up with one foot, driving through the heel.','Bring the other foot up to stand on the box.','Step back down and repeat, leading with the same leg.'],
      tip: 'A higher box increases the range of motion and glute activation.'
    },
    {
      name: 'Sumo Squat', difficulty: 'beginner', sets: '3', reps: '12–15', rest: '75s', equipment: 'Dumbbell',
      desc: 'A wide-stance squat variation that places more emphasis on the inner glutes and adductors.',
      steps: ['Feet wider than shoulder-width, toes pointing out at 45°.','Hold a dumbbell between your legs.','Squat down, driving knees over toes.','Push through the heels to rise, squeezing glutes at the top.'],
      tip: 'Think about spreading the floor apart with your feet as you rise.'
    },
    {
      name: 'Donkey Kicks', difficulty: 'beginner', sets: '3', reps: '15–20 each', rest: '45s', equipment: 'Bodyweight',
      desc: 'A simple but effective isolation exercise for the glutes, great for activation.',
      steps: ['Start on all fours, hands under shoulders, knees under hips.','Keeping the knee bent at 90°, kick one leg back and up.','Squeeze the glute at the top.','Lower and repeat for all reps, then switch legs.'],
      tip: 'Focus on glute contraction rather than just lifting the leg — quality over height.'
    },
  ],
};

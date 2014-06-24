describe('Solution', function() {

  var solution;
          
  beforeEach(function() {
    solution = new Solution();
  });

  it('should format the distance for one yard', function() {
    expect(solution.format(1)).toEqual('1 yard');
  });

  it('should format the distance for yards', function() {
    expect(solution.format(400)).toEqual('400 yards');
  });

  it('should format the distance for whole furlongs', function() {
    expect(solution.format(1320)).toEqual('6 furlongs');
  });

  it('should format the distance for half furlongs', function() {
    expect(solution.format(1430)).toEqual('6.5 furlongs');
  });

  it('should format the distance for not whole furlongs', function() {
    expect(solution.format(1340)).toEqual('6 furlongs 20 yards');
  });

  it('should format the distance for one mile', function() {
    expect(solution.format(1760)).toEqual('1 mile');  
  });

  it('should format the distance with eighths of a mile', function() {
    expect(solution.format(1980)).toEqual('1 1/8 mile');
  });

  it('should format the distance with miles and remainding yards', function() {
    expect(solution.format(2090)).toEqual('1 mile 330 yards');
  });

  it('should format the distance with 220 yards', function() {
    expect(solution.format(220)).toEqual('220 yards');
  });

  it('should format the distance with 1 yard', function() {
    expect(solution.format(1)).toEqual('1 yard');
  });

  it('should format the distance with 659 yards', function() {
    expect(solution.format(659)).toEqual('659 yards');
  });

});